import { Request, Response } from "express";
const request = require("request-promise-native");

interface authRequest{
    email: string;
    password: string;
};

export async function getAuthToken(req: Request, res: Response){
    try{
        const endpoint = process.env.AUTHENTICATE_API_URL + "authenticate";
        const options= {
            method: 'POST',
            body: {
                email: req.body.email,
                password: req.body.password
            }
        }
        const result = await request(endpoint, 
            {
                method: 'POST'
            }
        );
        console.log(result);
        res.status(200).json({
            data: result
        })
    } catch (err){
        res.status(500).json({
            error: err.message
        });
    }

}