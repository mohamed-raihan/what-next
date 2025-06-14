import { countryData } from '../../sections/StudyAbroad/countryData';
import CountrySection from '../../sections/StudyAbroad/CountrySection';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ country: string }>;
  }

export default async function StudyAbroadCountryPage({ params }: Props) {
  const {country} =  await params;
  const data = countryData[country.toLowerCase()];
  if (!data) return notFound();
  console.log(data);
  return <CountrySection {...data} />;
} 