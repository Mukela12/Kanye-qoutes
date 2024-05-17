import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Quote.css';
import { Box, Typography } from '@mui/material';

const images = [
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924981/de0a5c7b-306c-4e1b-82df-764041d7936a_pesxgm.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924981/cuties_o0vpwt.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924969/OUTFIT_ezhdl9.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924970/Ye_loiq21.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924969/kanye_west_a03oi2.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924968/Kanye_ate_m9zdmn.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924969/YE_1_okv2kl.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924968/Kanye_West_gives_graduation_speech_after_receiving_honorary_doctoral_degree_in_Chicago_HEAR_IT_kjfotr.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924968/Kanye_West_during_G_O.O.D._Music_GRAMMY_After_Party_at_Heaven_in_Los.org.chromium.not-a-real-type.28184C42-4D11-48F0-A323-5C07E940A766.org.chromium.not-a-real-type_ae4voc.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925344/The_Internet_Has_Been_Gifted_With_A_Hilarious_Kanye_And_North_West_Face_Swap_o9fzh4.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925344/Kim_Kardashian_and_Kanye_West_skip_the_BRITs_after-parties_cg4abx.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925344/Kanye_aukfr3.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925343/Kanye_West_rocks_silver_body_paint_and_strange_baggy_outfit_q8wawx.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925344/North_Kanye_West_ylxdzp.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925343/It_is_a_good_pic_of_me_thanks_ibnjie.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925343/f7addc17-1ea5-487c-be38-96c17425e7b7_vlhr1p.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925343/20c7547e-1589-4305-85c7-ad555e7e3729_qthbd8.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925343/feliz_an%CC%83o_wgbppx.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925342/d11898ad-5661-4b4d-96cf-91d8350c164d_vqyigf.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925342/a45ed6db-2243-4aa2-8bcf-b5395f026830_doqvpq.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925342/36fac09c-7f59-47fb-adf8-6e26627de774_yh27gp.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925342/5fe54c20-7e17-4ba1-8a86-15e573717142_n9xean.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925342/24c6a0b1-d543-4b47-8cd3-355a59f58f0b_p0nt1o.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715937746/whats-your-best-kanye-reaction-meme-v0-8twms4av2fka1_vza9ia.webp',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715937745/417457527670_k7jl85.webp',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715937745/30ce29dd-1f37-4866-ad75-016378a25f15_962x1203_gchvur.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715937745/OPH7CX54UVJMVDSR56CFJUXMY4_ay5v9p.avif',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715937745/4905_cwfxfo.webp',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715937745/Kanye-West_03-02-2016_t3yhjr.webp',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715937745/d8583fe287203342606b495f3045209a_iyyeir.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715937744/5c6bd57007800ce7467a1f3bfcb33dc0_sjynal.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925343/I_MISS_THE_OLD_KANYE_KanyeWest_imissth_fam6aa.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715925342/573419e8-ec5d-4dfe-8b82-99fc35e96507_pc6kr7.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715924981/de0a5c7b-306c-4e1b-82df-764041d7936a_pesxgm.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715922189/artworks-liIwJimxFBgCDUCn-BwfSrg-t500x500_vqsxwi.jpg',
  'https://res.cloudinary.com/dgdbxflan/image/upload/v1715921725/download_tcqmem.jpg'
];

const Quote = () => {
    const [quote, setQuote] = useState('');
    const [image, setImage] = useState(images[0]);
    const [prevImageIndex, setPrevImageIndex] = useState(0);

    useEffect(() => {
        const fetchQuote = () => {
            axios.get('https://api.kanye.rest/')
                .then(response => {
                    const newQuote = response.data.quote;
                    let newImageIndex;
                    do {
                        newImageIndex = Math.floor(Math.random() * images.length);
                    } while (newImageIndex === prevImageIndex);

                    setQuote(newQuote);
                    setImage(images[newImageIndex]);
                    setPrevImageIndex(newImageIndex);
                })
                .catch(error => {
                    console.error('Error fetching the quote:', error);
                });
        };

        fetchQuote();
        const intervalId = setInterval(fetchQuote, 10000);
        return () => clearInterval(intervalId);
    }, []);

    const fontSize = quote.length > 80 ? 'h6' : 'h4'; // Adjust font size based on quote length

    return (
      <Box textAlign="center" mt={5}>
        <Typography variant={fontSize} gutterBottom>
          "{quote}"
        </Typography>
        <img src={image} alt="Kanye" style={{ width: '300px', height: 'auto', marginTop: '20px' }} />
      </Box>
    );
};

export default Quote;
