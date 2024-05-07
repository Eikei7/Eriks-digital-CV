export const fetchData = async () => {
    const response = await fetch('https://api.github.com/users/Eikei7/repos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  