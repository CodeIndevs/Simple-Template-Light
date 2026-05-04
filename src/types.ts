/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  whatsappNumber: string;
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  openingHours: {
    [key: string]: string;
  };
  heroImage: string;
}
