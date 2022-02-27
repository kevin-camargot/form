
export default function handler(req, res) {
    console.log(req)
    res.status(200).json({ user: "res.name" })
}