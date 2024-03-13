import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Input, Button, Box, Heading, InputGroup } from '@chakra-ui/react';
import { SERVER_ENDPOINT } from '../config';
import { useSelector } from 'react-redux';

const URLShortnerForm = (props: {
  windowReload: boolean
}) => {

  const { windowReload } = props;
  const [ destination, setDestination ] = useState();
  const [ shortURL, setShortURL ] = useState<{
    shortId: string;
  } | null>(null);

  const userId = useSelector((state: any) => state.auth.currentUser?._id);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setShortURL(null);
      const result = await axios.post(`${SERVER_ENDPOINT}/api/url`, {destination, userId}).then((res) => res.data)
      setShortURL(result)
      if (windowReload) {
        window.location.reload(); 
      }
    }
  return <Box pos='relative' w="100%">
    <form onSubmit={handleSubmit}>
      <InputGroup>
      <Input
      onChange={(e: any) => setDestination(e.target.value)}
      borderColor='#005AE2'
      placeholder='https://example.com'
      >
      </Input>
      <Button type='submit' bgColor='#949494'>Shorten</Button>
      </InputGroup>
    </form>
    {shortURL && !windowReload && (
      <a href={`${SERVER_ENDPOINT}/${shortURL?.shortId}`}><h1><span style={{fontWeight: "bold"}}>Your short URL</span>: http://sciss.or/{(shortURL.shortId)}</h1></a>
    )}
</Box>
}

export default URLShortnerForm;
