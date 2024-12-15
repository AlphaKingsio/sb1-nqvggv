import React from 'react';
import { DashboardGrid } from './DashboardGrid';
import { useDashboard } from '../../hooks/useDashboard';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

export function Dashboard() {
  const { isLoading, error, data } = useDashboard();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return <DashboardGrid data={data} />;
}