import React from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { FormInput } from '../common/FormInput';
import { FormCheckbox } from '../common/FormCheckbox';
import { Button } from '../common/Button';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../contexts/AuthContext';

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface RegisterFormProps {
  onSuccess?: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { register } = useAuth();
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm<RegisterFormData>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    },
    onSubmit: async (data) => {
      try {
        await register(data);
        onSuccess?.();
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        type="text"
        label="Username"
        value={values.username}
        onChange={(value) => handleChange('username', value)}
        placeholder="Choose a username"
        icon={User}
        error={errors.username}
        required
      />

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
        placeholder="Create a password"
        icon={Lock}
        error={errors.password}
        required
      />

      <FormInput
        type="password"
        label="Confirm Password"
        value={values.confirmPassword}
        onChange={(value) => handleChange('confirmPassword', value)}
        placeholder="Confirm your password"
        icon={Lock}
        error={errors.confirmPassword}
        required
      />

      <FormCheckbox
        label="I agree to the Terms of Service and Privacy Policy"
        checked={values.agreeToTerms}
        onChange={(checked) => handleChange('agreeToTerms', checked)}
        required
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
        loading={isSubmitting}
      >
        Create Account
      </Button>
    </form>
  );
}