import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const PostMail = () => {
  const [status, setStatus] = useState<string>('');

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASIN_FORM_ENDPOINT || '', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Mesajınız başarıyla gönderildi!');
        (e.target as HTMLFormElement).reset();
      }
      else {
        setStatus('Gönderme başarısız oldu. Lütfen tekrar deneyin.');
      }
    }
    catch (error) {
      setStatus('Bir hata oluştu: ' + (error as Error).message);
    }
  };

  return (
    <div className="container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative"
      >
        <div className="relative block overflow-hidden rounded-xl bg-gradient-to-r from-zinc-900/80 to-zinc-900/60  border border-zinc-800/50 p-6 transition-all duration-300">
          {/* Parlama Efekti */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700">
            <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent" />
          </div>

          <form onSubmit={sendEmail} className="space-y-4 relative z-10">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                İsim
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300"
                placeholder="Adınızı girin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300"
                placeholder="Email adresinizi girin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Mesaj
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 resize-none"
                placeholder="Mesajınızı yazın"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-violet-600/20 text-violet-400 rounded-lg border border-violet-500/30 hover:bg-violet-600/30 hover:border-violet-500/50 transition-all duration-300 font-medium flex items-center justify-center space-x-2"
            >
              <span>Gönder</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </form>

          {status && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg ${
                status.includes('başarıyla')
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}
            >
              {status}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PostMail;
