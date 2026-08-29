import NotificationItem from './NotificationItem';
export default function NotificationList({ items = [] }) { return <div>{items.map((item, index) => <NotificationItem key={index}>{item.text}</NotificationItem>)}</div>; }
