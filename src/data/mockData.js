export const users = [
  { username: 'srk.king', name: 'Shah Rukh Khan', avatar: 'https://i.pravatar.cc/160?img=47', verified: true, bio: 'King of romance, stories & unforgettable moments.', followers: '12.8K', following: 384 },
  { username: 'deepika.padukone', name: 'Deepika Padukone', avatar: 'https://i.pravatar.cc/160?img=12', verified: false },
  { username: 'alia.bhatt', name: 'Alia Bhatt', avatar: 'https://i.pravatar.cc/160?img=32', verified: false },
  { username: 'varun.dhawan', name: 'Varun Dhawan', avatar: 'https://i.pravatar.cc/160?img=68', verified: true },
  { username: 'priyanka.chopra', name: 'Priyanka Chopra', avatar: 'https://i.pravatar.cc/160?img=25', verified: false },
  { username: 'ranveer.singh', name: 'Ranveer Singh', avatar: 'https://i.pravatar.cc/160?img=5', verified: false }
];
export const stories = users.map((user, index) => ({ ...user, seen: index > 2, image: `https://images.unsplash.com/photo-${['1500534623283-312aade485b7','1493246507139-91e8fad9978e','1470252649378-9c29740c9fa8','1517841905240-472988babdf9','1507525428034-b723cf961d3e','1497366811353-6870744d04b2'][index]}?auto=format&fit=crop&w=900&q=80` }));
export const posts = [
  { id: 1, user: users[0], image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85', caption: 'A little more sunlight, a little less hurry.', tags: '#slowdays #outside', likes: '2,481', comments: [{ user: 'deepika.padukone', text: 'This is such a mood.' }], time: '18 min ago' },
  { id: 2, user: users[1], image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=85', caption: 'Found a quiet corner of the world.', tags: '#wander #weekend', likes: '891', comments: [{ user: 'srk.king', text: 'Need the coordinates.' }], time: '2 hours ago' },
  { id: 3, user: users[3], image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85', caption: 'The kind of morning that tastes like a reset.', tags: '#coffee #ritual', likes: '1,203', comments: [], time: '5 hours ago' }
];
export const explorePosts = [...posts, { id: 4, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' }, { id: 5, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80' }, { id: 6, image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80' }, { id: 7, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' }];
export const notifications = [{ icon: 'heart', text: 'Alia Bhatt liked your post', time: '4m', unread: true }, { icon: 'message', text: 'Deepika commented: “This is such a mood.”', time: '1h', unread: true }, { icon: 'user', text: 'Priyanka Chopra started following you', time: '3h', unread: false }, { icon: 'at', text: 'Varun mentioned you in a post', time: '1d', unread: false }];
export const conversations = users.slice(1, 5).map((user, index) => ({ user, last: ['You have to see this place', 'Sent you a photo', 'That sounds perfect!', 'Loved your latest post'][index], time: ['9:41 AM', 'Yesterday', 'Mon', 'Sun'][index], online: index < 2 }));
