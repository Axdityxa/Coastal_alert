import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();

router.get('/fetch-data', async (req: Request, res: Response) => {
  const apiUrl = 'https://gemini.incois.gov.in/OceanDataAPI/api/wqns/Kochi/currentspeed';

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `${process.env.API_KEY}` 
      }
    });
    res.json(response.data);
  } catch (error: any) {
    console.error('Error fetching data:', error.response?.status, error.response?.data);
    res.status(500).send(`Error fetching data: ${error.message}`);
  }
});

export default router;
