export default async function handler(req, res) {
  const { slug } = req.query
  // const URL = `https://api.iconify.design/${slug[0]}.json?icons=${slug[1]}`
  const URL = `https://api.iconify.design/${slug[0]}/${slug[1]}.svg`

  const data = await fetch(URL);
  const icons = await data.text();
  res.setHeader('Content-Type', 'image/svg+xml')
  res.write(icons);
  res.end()
}
