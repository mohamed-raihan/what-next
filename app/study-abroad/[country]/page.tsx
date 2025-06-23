import { getCountryData } from '../../sections/StudyAbroad/countryData';
import CountrySection from '../../sections/StudyAbroad/CountrySection';
import { notFound } from 'next/navigation';

export default async function StudyAbroadCountryPage({ params }: { params: { country: string } }) {
  const { country } = params;
  const allCountryData = await getCountryData();
  const data = allCountryData[country.toLowerCase()];
  if (!data) return notFound();
  return <CountrySection {...data} />;
} 