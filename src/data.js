import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/stripes/' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/stripes/' },
      { label: 'connect', icon: <FaCreditCard />, url: '/stripes/' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/stripes/' },
      { label: 'libraries', icon: <FaBook />, url: '/stripes/' },
      { label: 'help', icon: <FaBook />, url: '/stripes/' },
      { label: 'billing', icon: <FaBook />, url: '/stripes/' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/stripes/' },
      { label: 'customers', icon: <FaBriefcase />, url: '/stripes/' },
    ],
  },
];

export default sublinks;
