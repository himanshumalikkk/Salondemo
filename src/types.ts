/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  category: "hair" | "makeup" | "skin" | "nails" | "grooming";
  startingPrice: number;
  imageUrl: string;
  duration: string;
  iconName: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specialties: string[];
  experience: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  reviewText: string;
  rating: number;
  date: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  serviceId: string;
  date: string;
  message: string;
  status: "pending" | "confirmed" | "completed";
  createdAt: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
}
