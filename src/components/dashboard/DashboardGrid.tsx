import React from 'react';
import { SuccessfulSignals } from './sections/SuccessfulSignals';
import { RecentSignals } from './sections/RecentSignals';
import { NewInfluencers } from './sections/NewInfluencers';
import { TopInfluencers } from './sections/TopInfluencers';
import { Leaderboard } from './sections/Leaderboard';
import { Rewards } from './sections/Rewards';

export function DashboardGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <SuccessfulSignals signals={data?.successfulSignals} />
      <RecentSignals signals={data?.recentSignals} />
      <NewInfluencers influencers={data?.newInfluencers} />
      <TopInfluencers influencers={data?.topInfluencers} />
      <Leaderboard leaders={data?.leaderboard} />
      <Rewards rewards={data?.rewards} />
    </div>
  );
}