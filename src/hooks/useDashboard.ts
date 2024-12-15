import { useState, useEffect } from 'react';
import { 
  DashboardSignal, 
  Influencer, 
  Reward 
} from '../types';

export function useDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{
    successfulSignals: DashboardSignal[];
    recentSignals: DashboardSignal[];
    newInfluencers: Influencer[];
    topInfluencers: Influencer[];
    leaderboard: Influencer[];
    rewards: Reward[];
  } | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll simulate loading
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data would be replaced with actual API response
        setData({
          successfulSignals: [],
          recentSignals: [],
          newInfluencers: [],
          topInfluencers: [],
          leaderboard: [],
          rewards: []
        });
      } catch (err) {
        setError('Failed to load dashboard data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return { isLoading, error, data };
}