import React from 'react';
import styles from './Settings.module.scss';
import { Settings as SettingsIcon, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SettingsProps {
  onNavigate?: (page: string) => void;
}

const Settings: React.FC<SettingsProps> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.settings}>
      <div className={styles.header}>
        <h1>Einstellungen</h1>
        <p>Verwalte deine Anwendungseinstellungen</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Design</h2>
          <div className={styles.settingItem}>
            <div className={styles.label}>
              <span>Design Theme</span>
              <p>Wechsle zwischen Hell und Dunkel</p>
            </div>
            <div className={styles.themeToggle}>
              <button
                className={`${styles.themeBtn} ${theme === 'light' ? styles.active : ''}`}
                onClick={toggleTheme}
                title="Helles Theme"
              >
                <Sun size={18} />
              </button>
              <button
                className={`${styles.themeBtn} ${theme === 'dark' ? styles.active : ''}`}
                onClick={toggleTheme}
                title="Dunkles Theme"
              >
                <Moon size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Sprache</h2>
          <div className={styles.settingItem}>
            <div className={styles.label}>
              <span>Sprache</span>
              <p>Wähle deine Sprache</p>
            </div>
            <select defaultValue="de" disabled>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
            </select>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Datenschutz</h2>
          <div className={styles.settingItem}>
            <div className={styles.label}>
              <span>Newsletter</span>
              <p>Benachrichtigungen erhalten</p>
            </div>
            <input type="checkbox" disabled />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Über</h2>
          <div className={styles.about}>
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Lizenz:</strong> MIT</p>
            <p><strong>API:</strong> YGOProDeck</p>
          </div>
        </section>
      </div>

      <div className={styles.emptyState}>
        <div className={styles.icon}>
          <SettingsIcon size={48} />
        </div>
        <h3>Weitere Einstellungen verfügbar</h3>
        <p>Mehr Features werden in Kürze freigeschaltet</p>
      </div>
    </div>
  );
};

export default Settings;
