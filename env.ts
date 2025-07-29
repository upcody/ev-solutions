import { config } from '@dotenvx/dotenvx';
import { z } from 'zod';

config({ convention: 'flow' });

const envSchema = z.object({
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: z.string().min(1),

    NEXT_PUBLIC_APP_URL: z.string().url().min(1),

    NEXT_PUBLIC_IS_PRODUCTION: z.boolean().default(true),
});

export const env = envSchema.parse(process.env);
