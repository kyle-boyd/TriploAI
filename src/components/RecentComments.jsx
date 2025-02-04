import React from 'react';

const comments = [
  {
    id: 1,
    author: 'John Smith',
    content: 'Thanks for the detailed explanation about API authentication. This helped me resolve my integration issue!',
    article: 'API Documentation',
    timeAgo: '5 minutes ago'
  },
  {
    id: 2,
    author: 'Maria Thompson',
    content: 'Could you provide more information about the team permissions settings?',
    article: 'Team Management',
    timeAgo: '1 hour ago'
  }
];

const RecentComments = () => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 border rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-medium">{comment.author}</p>
              <p className="text-sm text-gray-500">
                commented on <span className="text-blue-600">{comment.article}</span>
              </p>
            </div>
            <span className="ml-auto text-sm text-gray-500">{comment.timeAgo}</span>
          </div>
          <p className="text-gray-600">{comment.content}</p>
          <button className="mt-2 text-sm text-gray-500 hover:text-gray-700">Reply</button>
        </div>
      ))}
    </div>
  );
};

export default RecentComments; 