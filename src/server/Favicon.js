/**
 * Return a 404 and exit the request for the favicon, to stop it coming up in error logs otherwise.
 * @param req
 * @param res
 * @param next
 * @constructor
 */
export default function HandleServerRendering (req, res, next) {
    res.sendStatus(404);
}
