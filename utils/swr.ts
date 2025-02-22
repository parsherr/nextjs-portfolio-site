'use client';
import axios from 'axios';
import useSWR from 'swr';
import { discordId, githubUsername } from './variables';

export default function SWR(url: string) {
  if (url === 'discord') url = 'https://api.lanyard.rest/v1/users/' + discordId;
  if (url === 'github') url = 'https://api.github.com/users/' + githubUsername + '/repos';
  // openWeatherApi 'de kullanıyorum, onu buradan bağlamadım ama eğer burayı biri okursa bilgi amaçlı yazıyım dedim :>

  return useSWR(url, href => (
    axios.get(href).then((res) => res.data)
  ));
};
