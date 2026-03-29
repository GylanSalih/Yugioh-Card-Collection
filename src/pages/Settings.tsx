import React from 'react';
import styles from './Settings.module.scss';
import { Settings as SettingsIcon } from 'lucide-react';

interface SettingsProps {
  onNavigate?: (page: string) => void;
}

const Settings: React.FC<SettingsProps> = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.header}>
        <h1>Einstellungen</h1>
        <p>Verwalte deine Anwendungseinstellungen</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Allgemein</h2>
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

          <div className={styles.settingItem}>
            <div className={styles.label}>
              <span>Design</span>
              <p>Wähle das Design Theme</p>
            </div>
            <select defaultValue="light" disabled>
              <option value="light">Hell</option>
              <option value="dark">Dunkel</option>
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
        <h3>Einstellungen werden bald verfügbar</h3>
        <p>Diese Funktionen werden in Kürze freigeschaltet</p>
      </div>
    </div>
  );
};

export default Settings;
