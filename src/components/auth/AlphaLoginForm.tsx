import React from 'react';
import { Mail, Lock, Award } from 'lucide-react';
import { FormInput } from '../common/FormInput';
import { Button } from '../common/Button';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../contexts/AuthContext';

interface AlphaLoginFormData {
  email: string;
  password: string;
  alphaCode: string;
}

interface AlphaLoginFormProps {
  onSuccess?: () => void;
}

export function AlphaLoginForm({ onSuccess }: AlphaLoginFormProps) {
  const { alphaLogin } = useAuth();
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm<AlphaLoginFormData>({
    initialValues: {
      email: '',
      password: '',
      alphaCode: '',
    },
    onSubmit: async (data) => {
      try {
        await alphaLogin(data);
        onSuccess?.();
      } catch (error) {
        console.error('Alpha login error:', error);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        type="email"
        label="Email"
        value={values.email}
        onChange={(value) => handleChange('email', value)}
        placeholder="Enter your email"
        icon={Mail}
        error={errors.email}
        required
      />

      <FormInput
        type="password"
        label="Password"
        value={values.password}
        onChange={(value) => handleChange('password', value)}
        placeholder="Enter your password"
        icon={Lock}
        error={errors.password}
        required
      />

      <FormInput
        type="text"
        label="Alpha Code"
        value={values.alphaCode}
        onChange={(value) => handleChange('alphaCode', value)}
        placeholder="Enter your alpha code"
        icon={Award}
        error={errors.alphaCode}
        required
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
        loading={isSubmitting}
      >
        Sign In as Alpha
      </Button>
    </form>
  );
}