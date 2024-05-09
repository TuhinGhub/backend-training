const geoip = require("geoip-lite");
import{Request,Response,NextFunction} from "express";

const expectedCountryCode = "IN";
const locationValidation = (req:Request, res:Response, next:NextFunction) => {
  const ip = req.headers.ip as string;
  if (!ip) {
    return res.status(400).send("Unable to determine your location");
  }

  const geo = geoip.lookup(ip);
  console.log(geo, 'geoooooo')
  if (!geo || geo.country !== expectedCountryCode) {
    return res.status(403).send("Wrong IP address");
  }
  return res.status(200).send("COrrect");

  next();
};

module.exports = locationValidation;



