export default function handler(req, res) {
  console.log(req.query.id)

  res.status(200).json({ name: 'John Doe' });
}
