import { IsStrongPassword } from 'class-validator';

import { Match } from 'src/common/validations/decorators/match.decorator';

export class PasswordConfirmationDto {
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;

  @Match('password', { message: 'Password confirmation must match password' })
  passwordConfirmation: string;
}
