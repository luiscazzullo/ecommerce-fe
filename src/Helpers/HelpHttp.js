export const PostItems = async () => {
  const url = 'http://localhost:5000/Items';
  const response = await fetch (url);
  const items = await response.json();
  return items;
}