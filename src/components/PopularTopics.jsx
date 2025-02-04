import React from 'react';

const topics = [
  {
    id: 1,
    title: 'Getting Started',
    description: 'Learn the basics and set up your workspace',
    icon: '📚'
  },
  {
    id: 2,
    title: 'Account Settings',
    description: 'Manage your account and preferences',
    icon: '⚙️'
  },
  {
    id: 3,
    title: 'Team Management',
    description: 'Add and manage team members',
    icon: '👥'
  },
  {
    id: 4,
    title: 'Security',
    description: 'Privacy and security settings',
    icon: '🔒'
  },
  {
    id: 5,
    title: 'Integrations',
    description: 'Connect with other tools and services',
    icon: '🔌'
  }
];

const PopularTopics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {topics.map((topic) => (
        <div key={topic.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">{topic.icon}</div>
          <h3 className="font-medium mb-1">{topic.title}</h3>
          <p className="text-sm text-gray-600">{topic.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularTopics; 