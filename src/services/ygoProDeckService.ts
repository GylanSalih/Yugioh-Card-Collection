import axios from 'axios';

const API_BASE_URL = 'https://db.ygoprodeck.com/api/v7';

export interface Card {
  id: number;
  name: string;
  type: string;
  desc: string;
  atk?: number;
  def?: number;
  level?: number;
  race?: string;
  attribute?: string;
  archetype?: string;
  card_images: Array<{
    id: number;
    image_url: string;
    image_url_small: string;
  }>;
  card_prices?: Array<{
    cardmarket_price?: number;
    tcgplayer_price?: number;
    ebay_price?: number;
  }>;
}

export interface SearchParams {
  name?: string;
  type?: string;
  archetype?: string;
  level?: number;
  attribute?: string;
  race?: string;
  sort?: string;
  num?: number;
  offset?: number;
}

class YGOProDeckService {
  /**
   * Suche nach Karten
   */
  async searchCards(params: SearchParams): Promise<Card[]> {
    try {
      const queryParams = new URLSearchParams();
      
      if (params.name) queryParams.append('fname', params.name);
      if (params.type) queryParams.append('type', params.type);
      if (params.archetype) queryParams.append('archetype', params.archetype);
      if (params.level) queryParams.append('level', params.level.toString());
      if (params.attribute) queryParams.append('attribute', params.attribute);
      if (params.race) queryParams.append('race', params.race);
      if (params.sort) queryParams.append('sort', params.sort);
      if (params.num) queryParams.append('num', params.num.toString());
      if (params.offset) queryParams.append('offset', params.offset.toString());

      const response = await axios.get(
        `${API_BASE_URL}/cardinfo.php?${queryParams.toString()}`
      );

      return response.data.data || [];
    } catch (error) {
      console.error('Fehler bei der Suche nach Karten:', error);
      return [];
    }
  }

  /**
   * Erhalte eine bestimmte Karte nach ID
   */
  async getCard(cardId: number): Promise<Card | null> {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/cardinfo.php?id=${cardId}`
      );

      const cards = response.data.data;
      return cards && cards.length > 0 ? cards[0] : null;
    } catch (error) {
      console.error('Fehler beim Abrufen der Karte:', error);
      return null;
    }
  }

  /**
   * Erhalte alle Archetypen
   */
  async getArchetypes(): Promise<string[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/archetypes.php`);
      return response.data || [];
    } catch (error) {
      console.error('Fehler beim Abrufen der Archetypen:', error);
      return [];
    }
  }

  /**
   * Erhalte alle Kartentypen
   */
  async getCardTypes(): Promise<string[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/cardtypes.php`);
      return response.data.data || [];
    } catch (error) {
      console.error('Fehler beim Abrufen der Kartentypen:', error);
      return [];
    }
  }

  /**
   * Erhalte alle Rassen
   */
  async getRaces(): Promise<string[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/races.php`);
      return response.data.data || [];
    } catch (error) {
      console.error('Fehler beim Abrufen der Rassen:', error);
      return [];
    }
  }

  /**
   * Erhalte alle Attribute
   */
  async getAttributes(): Promise<string[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/attributes.php`);
      return response.data.data || [];
    } catch (error) {
      console.error('Fehler beim Abrufen der Attribute:', error);
      return [];
    }
  }
}

export default new YGOProDeckService();
