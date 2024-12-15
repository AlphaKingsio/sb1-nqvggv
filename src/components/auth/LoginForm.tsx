import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { FormInput } from '../common/FormInput';
import { FormCheckbox } from '../common/FormCheckbox';
import { Button } from '../common/Button';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../contexts/AuthContext';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const { login } = useAuth();
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm<LoginFormData>({
    initialValues: {
      email: 'signal@gmail.com',
      password: '12345678',
      rememberMe: false,
    },
    onSubmit: async (data) => {
      try {
        await login({ email: data.email, password: data.password });
        onSuccess?.();
      } catch (error) {
        console.error('Login error:', error);
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

      <div className="flex items-center justify-between">
        <FormCheckbox
          label="Remember me"
          checked={values.rememberMe}
          onChange={(checked) => handleChange('rememberMe', checked)}
        />
        <button
          type="button"
          className="text-blue-400 text-sm hover:text-blue-300"
        >
          Forgot Password?
        </button>
      </div>

      {errors.submit && (
        <div className="text-red-400 text-sm">{errors.submit}</div>
      )}

      <Button
        type="submit"
        variant="primary"
        fullWidth
        loading={isSubmitting}
      >
        Sign In
      </Button>
    </form>
  );
}