import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { GlobalExceptionFilter } from '@app/common/filters/error.filter'
import { ResponseInterceptor } from '@app/common/interceptors/response.interceptor'

const overrideJsonBigIntSerialization = (): void => {
  const originalJSONStringify = JSON.stringify

  JSON.stringify = function (value: any, replacer, space: number): string {
    const bigIntReplacer = (_key: string, value: any): any => {
      if (typeof value === 'bigint') {
        return Number(value.toString())
      }
      return value
    }

    const customReplacer = (key: string, value: any): any => {
      if (Array.isArray(replacer) && !replacer.includes(key) && key !== '') {
        return undefined
      }

      const modifiedValue = bigIntReplacer(key, value)

      if (typeof replacer === 'function') {
        return replacer(key, modifiedValue)
      }

      return modifiedValue
    }

    return originalJSONStringify(value, replacer != null ? customReplacer : bigIntReplacer, space)
  }
}

overrideJsonBigIntSerialization()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Enable CORS for all routes
  app.enableCors({
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders:
      'X-Requested-With, Origin, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization',
  })

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Smolathon')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
      'telegram-query',
    )
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new GlobalExceptionFilter())
  app.useGlobalInterceptors(new ResponseInterceptor())

  await app.listen(3002)
}
bootstrap()
