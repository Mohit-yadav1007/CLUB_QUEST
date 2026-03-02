import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const roleMeta = {
  student: {
    title: 'Student',
    signupFields: [
      { id: 'student-username', label: 'Username', type: 'text', name: 'username', placeholder: 'Enter username' },
      { id: 'student-rollno', label: 'Roll No', type: 'text', name: 'rollNo', placeholder: 'Enter roll number' },
      { id: 'student-email', label: 'Email', type: 'email', name: 'email', placeholder: 'Enter email address' },
    ],
    loginFields: [
      { id: 'student-login-email', label: 'Email', type: 'email', name: 'email', placeholder: 'Enter email address' },
      {
        id: 'student-login-rollno',
        label: 'Roll No',
        type: 'text',
        name: 'rollNo',
        placeholder: 'Enter roll number',
      },
    ],
  },
  admin: {
    title: 'Admin',
    signupFields: [
      { id: 'admin-name', label: 'Admin Name', type: 'text', name: 'adminName', placeholder: 'Enter admin name' },
      {
        id: 'admin-club',
        label: 'Club You Belong To',
        type: 'text',
        name: 'clubName',
        placeholder: 'Enter club name',
      },
      {
        id: 'admin-position',
        label: 'Your Position',
        type: 'text',
        name: 'position',
        placeholder: 'Enter your position',
      },
      {
        id: 'admin-mobile',
        label: 'Mobile Number',
        type: 'tel',
        name: 'mobile',
        placeholder: 'Enter mobile number',
      },
      { id: 'admin-email', label: 'Email', type: 'email', name: 'email', placeholder: 'Enter email address' },
    ],
    loginFields: [
      { id: 'admin-login-email', label: 'Email', type: 'email', name: 'email', placeholder: 'Enter email address' },
      {
        id: 'admin-login-mobile',
        label: 'Mobile Number',
        type: 'tel',
        name: 'mobile',
        placeholder: 'Enter mobile number',
      },
    ],
  },
};

const GetStarted = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [mode, setMode] = useState('signup');
  const [message, setMessage] = useState('');

  const selectedRoleMeta = useMemo(() => {
    if (!selectedRole) {
      return null;
    }

    return roleMeta[selectedRole];
  }, [selectedRole]);

  const fields = useMemo(() => {
    if (!selectedRoleMeta) {
      return [];
    }

    return mode === 'signup' ? selectedRoleMeta.signupFields : selectedRoleMeta.loginFields;
  }, [mode, selectedRoleMeta]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setMode('signup');
    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const action = mode === 'signup' ? 'Sign up' : 'Log in';
    setMessage(`${action} request submitted for ${selectedRoleMeta.title}.`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header currentPage="get-started" />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-36 md:px-6 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">Get Started</h1>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            Choose your role first, then continue with sign up. If you already have an account, switch to log in.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(roleMeta).map(([roleKey, role]) => {
            const isActive = selectedRole === roleKey;
            return (
              <motion.button
                key={roleKey}
                type="button"
                whileHover={{ y: -3 }}
                onClick={() => handleRoleSelect(roleKey)}
                className={`rounded-3xl border p-6 text-left transition-colors ${
                  isActive
                    ? 'border-emerald-400/60 bg-emerald-500/10'
                    : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-300/85">Continue As</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white">{role.title}</h2>
              </motion.button>
            );
          })}
        </div>

        {selectedRoleMeta ? (
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-8 w-full max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 md:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-3xl font-semibold text-white">
                {mode === 'signup' ? `${selectedRoleMeta.title} Sign Up` : `${selectedRoleMeta.title} Log In`}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setMode((prev) => (prev === 'signup' ? 'login' : 'signup'));
                  setMessage('');
                }}
                className="text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
              >
                {mode === 'signup' ? 'Already have an account? Log in' : 'New here? Sign up'}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {fields.map((field) => (
                <label key={field.id} htmlFor={field.id} className="block">
                  <span className="text-sm text-white/70">{field.label}</span>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-emerald-400/70"
                    placeholder={field.placeholder}
                  />
                </label>
              ))}

              <button
                type="submit"
                className="mt-2 inline-flex rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
              >
                {mode === 'signup' ? 'Sign Up' : 'Log In'}
              </button>
            </form>

            {message ? <p className="mt-4 text-sm text-emerald-300/90">{message}</p> : null}
          </motion.section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
