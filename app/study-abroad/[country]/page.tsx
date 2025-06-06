import { countryData } from '../../sections/StudyAbroad/countryData';
import CountrySection from '../../sections/StudyAbroad/CountrySection';
import { notFound } from 'next/navigation';

interface Props {
  params: { country: string };
}

export default function StudyAbroadCountryPage({ params }: Props) {
  const data = countryData[params.country.toLowerCase()];
  if (!data) return notFound();
  return <CountrySection {...data} />;
} 