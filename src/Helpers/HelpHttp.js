export const PostItems = async () => {
  try {
    const response = await fetch("/* Link del servidor definitivo */");
    const items = await response.json();
    return(items);
  } catch (error) {
    console.log(error);
  }
};
