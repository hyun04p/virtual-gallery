import krtoro from './krtoro';

const generateRoute = (name: string) => {
  name = name.replaceAll(' ', '-');
  name = name.toLowerCase();
  if (name.match(/[\u3131-\uD79D]/giu)) {
    name = krtoro(name);
  }
  return name;
};

export default generateRoute;
