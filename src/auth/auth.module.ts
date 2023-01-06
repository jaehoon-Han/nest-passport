import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport/dist';
import { localStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'XXXX', // put env variables
    signOptions: { expiresIn: '60s' },
  })],
  providers: [AuthService, localStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
