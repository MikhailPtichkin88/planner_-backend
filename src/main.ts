import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('planner_api')
	app.use(cookieParser())
	app.enableCors({
		origin: process.env.CORS_ORIGIN.split(','),
		credentials: true,
		exposedHeaders: 'set-cookie'
	})
	await app.listen(parseInt(process.env.PORT, 10) || 4200);
}
bootstrap()
