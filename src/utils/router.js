const router = (req, res) => {
    req.statud(404).json({message:`The request route '${req.url}' is not found` });
}
export default router;