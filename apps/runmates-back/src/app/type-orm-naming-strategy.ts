import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class TypeOrmNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  tableName(className: string, customName: string): string {
    console.log('tableName', className, customName);
    return customName || snakeCase(className.replace('Entity', ''));
  }
}