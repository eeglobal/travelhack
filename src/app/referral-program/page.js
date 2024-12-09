import ReferralEarnCoins from "../ui/components/referral-program/referral-earn-coins";
import ReferralHero from "../ui/components/referral-program/referral-hero";
import ReferralImageText from "../ui/components/referral-program/referral-image-with-text";
import { Metadata } from 'next';
 
export const metadata = {
  title: 'Referral Program',
};

export default function Page() {
    return (
      <>
      <ReferralHero/>
      <ReferralImageText/>
      <ReferralEarnCoins/>
      </>
    )
  }