
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Specialty
 * 
 */
export type Specialty = $Result.DefaultSelection<Prisma.$SpecialtyPayload>
/**
 * Model ClinicalHistory
 * 
 */
export type ClinicalHistory = $Result.DefaultSelection<Prisma.$ClinicalHistoryPayload>
/**
 * Model Visit
 * 
 */
export type Visit = $Result.DefaultSelection<Prisma.$VisitPayload>
/**
 * Model MedicalStudy
 * 
 */
export type MedicalStudy = $Result.DefaultSelection<Prisma.$MedicalStudyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  PROFESIONAL: 'PROFESIONAL'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialty`: Exposes CRUD operations for the **Specialty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialties
    * const specialties = await prisma.specialty.findMany()
    * ```
    */
  get specialty(): Prisma.SpecialtyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinicalHistory`: Exposes CRUD operations for the **ClinicalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClinicalHistories
    * const clinicalHistories = await prisma.clinicalHistory.findMany()
    * ```
    */
  get clinicalHistory(): Prisma.ClinicalHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visit`: Exposes CRUD operations for the **Visit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visits
    * const visits = await prisma.visit.findMany()
    * ```
    */
  get visit(): Prisma.VisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalStudy`: Exposes CRUD operations for the **MedicalStudy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalStudies
    * const medicalStudies = await prisma.medicalStudy.findMany()
    * ```
    */
  get medicalStudy(): Prisma.MedicalStudyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Patient: 'Patient',
    Specialty: 'Specialty',
    ClinicalHistory: 'ClinicalHistory',
    Visit: 'Visit',
    MedicalStudy: 'MedicalStudy'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "patient" | "specialty" | "clinicalHistory" | "visit" | "medicalStudy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Specialty: {
        payload: Prisma.$SpecialtyPayload<ExtArgs>
        fields: Prisma.SpecialtyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialtyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialtyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          findFirst: {
            args: Prisma.SpecialtyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialtyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          findMany: {
            args: Prisma.SpecialtyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          create: {
            args: Prisma.SpecialtyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          createMany: {
            args: Prisma.SpecialtyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialtyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          delete: {
            args: Prisma.SpecialtyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          update: {
            args: Prisma.SpecialtyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          deleteMany: {
            args: Prisma.SpecialtyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialtyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialtyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>[]
          }
          upsert: {
            args: Prisma.SpecialtyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtyPayload>
          }
          aggregate: {
            args: Prisma.SpecialtyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialty>
          }
          groupBy: {
            args: Prisma.SpecialtyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialtyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialtyCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialtyCountAggregateOutputType> | number
          }
        }
      }
      ClinicalHistory: {
        payload: Prisma.$ClinicalHistoryPayload<ExtArgs>
        fields: Prisma.ClinicalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicalHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicalHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>
          }
          findFirst: {
            args: Prisma.ClinicalHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicalHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>
          }
          findMany: {
            args: Prisma.ClinicalHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>[]
          }
          create: {
            args: Prisma.ClinicalHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>
          }
          createMany: {
            args: Prisma.ClinicalHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicalHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>[]
          }
          delete: {
            args: Prisma.ClinicalHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>
          }
          update: {
            args: Prisma.ClinicalHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ClinicalHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicalHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicalHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ClinicalHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalHistoryPayload>
          }
          aggregate: {
            args: Prisma.ClinicalHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinicalHistory>
          }
          groupBy: {
            args: Prisma.ClinicalHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicalHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicalHistoryCountAggregateOutputType> | number
          }
        }
      }
      Visit: {
        payload: Prisma.$VisitPayload<ExtArgs>
        fields: Prisma.VisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findFirst: {
            args: Prisma.VisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findMany: {
            args: Prisma.VisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          create: {
            args: Prisma.VisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          createMany: {
            args: Prisma.VisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          delete: {
            args: Prisma.VisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          update: {
            args: Prisma.VisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          deleteMany: {
            args: Prisma.VisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          upsert: {
            args: Prisma.VisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          aggregate: {
            args: Prisma.VisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisit>
          }
          groupBy: {
            args: Prisma.VisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitCountArgs<ExtArgs>
            result: $Utils.Optional<VisitCountAggregateOutputType> | number
          }
        }
      }
      MedicalStudy: {
        payload: Prisma.$MedicalStudyPayload<ExtArgs>
        fields: Prisma.MedicalStudyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalStudyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalStudyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>
          }
          findFirst: {
            args: Prisma.MedicalStudyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalStudyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>
          }
          findMany: {
            args: Prisma.MedicalStudyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>[]
          }
          create: {
            args: Prisma.MedicalStudyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>
          }
          createMany: {
            args: Prisma.MedicalStudyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalStudyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>[]
          }
          delete: {
            args: Prisma.MedicalStudyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>
          }
          update: {
            args: Prisma.MedicalStudyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>
          }
          deleteMany: {
            args: Prisma.MedicalStudyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalStudyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalStudyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>[]
          }
          upsert: {
            args: Prisma.MedicalStudyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalStudyPayload>
          }
          aggregate: {
            args: Prisma.MedicalStudyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalStudy>
          }
          groupBy: {
            args: Prisma.MedicalStudyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalStudyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalStudyCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalStudyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    patient?: PatientOmit
    specialty?: SpecialtyOmit
    clinicalHistory?: ClinicalHistoryOmit
    visit?: VisitOmit
    medicalStudy?: MedicalStudyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    patients: number
    visits: number
    specialties: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | UserCountOutputTypeCountPatientsArgs
    visits?: boolean | UserCountOutputTypeCountVisitsArgs
    specialties?: boolean | UserCountOutputTypeCountSpecialtiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialtyWhereInput
  }


  /**
   * Count Type SpecialtyCountOutputType
   */

  export type SpecialtyCountOutputType = {
    professionals: number
  }

  export type SpecialtyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionals?: boolean | SpecialtyCountOutputTypeCountProfessionalsArgs
  }

  // Custom InputTypes
  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialtyCountOutputType
     */
    select?: SpecialtyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialtyCountOutputType without action
   */
  export type SpecialtyCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ClinicalHistoryCountOutputType
   */

  export type ClinicalHistoryCountOutputType = {
    visits: number
  }

  export type ClinicalHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | ClinicalHistoryCountOutputTypeCountVisitsArgs
  }

  // Custom InputTypes
  /**
   * ClinicalHistoryCountOutputType without action
   */
  export type ClinicalHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistoryCountOutputType
     */
    select?: ClinicalHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicalHistoryCountOutputType without action
   */
  export type ClinicalHistoryCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
  }


  /**
   * Count Type VisitCountOutputType
   */

  export type VisitCountOutputType = {
    studies: number
  }

  export type VisitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studies?: boolean | VisitCountOutputTypeCountStudiesArgs
  }

  // Custom InputTypes
  /**
   * VisitCountOutputType without action
   */
  export type VisitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitCountOutputType
     */
    select?: VisitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitCountOutputType without action
   */
  export type VisitCountOutputTypeCountStudiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalStudyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    officeAddress: string | null
    city: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    officeAddress: string | null
    city: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    password: number
    role: number
    officeAddress: number
    city: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    role?: true
    officeAddress?: true
    city?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    role?: true
    officeAddress?: true
    city?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    password?: true
    role?: true
    officeAddress?: true
    city?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    name: string | null
    password: string
    role: $Enums.Role
    officeAddress: string | null
    city: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    officeAddress?: boolean
    city?: boolean
    patients?: boolean | User$patientsArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    specialties?: boolean | User$specialtiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    officeAddress?: boolean
    city?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    officeAddress?: boolean
    city?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    officeAddress?: boolean
    city?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "name" | "password" | "role" | "officeAddress" | "city", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | User$patientsArgs<ExtArgs>
    visits?: boolean | User$visitsArgs<ExtArgs>
    specialties?: boolean | User$specialtiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patients: Prisma.$PatientPayload<ExtArgs>[]
      visits: Prisma.$VisitPayload<ExtArgs>[]
      specialties: Prisma.$SpecialtyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      name: string | null
      password: string
      role: $Enums.Role
      officeAddress: string | null
      city: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends User$patientsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visits<T extends User$visitsArgs<ExtArgs> = {}>(args?: Subset<T, User$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specialties<T extends User$specialtiesArgs<ExtArgs> = {}>(args?: Subset<T, User$specialtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly officeAddress: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.patients
   */
  export type User$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * User.visits
   */
  export type User$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    cursor?: VisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * User.specialties
   */
  export type User$specialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    where?: SpecialtyWhereInput
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    cursor?: SpecialtyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    professionalId: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    professionalId: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    name: string | null
    dni: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    professionalId: number | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    dni: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    professionalId: number | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    dni: number
    email: number
    phone: number
    dateOfBirth: number
    address: number
    createdAt: number
    updatedAt: number
    professionalId: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    professionalId?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    professionalId?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    dni?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    professionalId?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    dni?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    professionalId?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    dni?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    professionalId?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    name: string
    dni: string
    email: string
    phone: string | null
    dateOfBirth: Date | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    professionalId: number
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dni?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionalId?: boolean
    professional?: boolean | UserDefaultArgs<ExtArgs>
    clinicalHistory?: boolean | Patient$clinicalHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dni?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionalId?: boolean
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dni?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionalId?: boolean
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    dni?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionalId?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dni" | "email" | "phone" | "dateOfBirth" | "address" | "createdAt" | "updatedAt" | "professionalId", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | UserDefaultArgs<ExtArgs>
    clinicalHistory?: boolean | Patient$clinicalHistoryArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      professional: Prisma.$UserPayload<ExtArgs>
      clinicalHistory: Prisma.$ClinicalHistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      dni: string
      email: string
      phone: string | null
      dateOfBirth: Date | null
      address: string | null
      createdAt: Date
      updatedAt: Date
      professionalId: number
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professional<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clinicalHistory<T extends Patient$clinicalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Patient$clinicalHistoryArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly dni: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
    readonly professionalId: FieldRef<"Patient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.clinicalHistory
   */
  export type Patient$clinicalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    where?: ClinicalHistoryWhereInput
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Specialty
   */

  export type AggregateSpecialty = {
    _count: SpecialtyCountAggregateOutputType | null
    _avg: SpecialtyAvgAggregateOutputType | null
    _sum: SpecialtySumAggregateOutputType | null
    _min: SpecialtyMinAggregateOutputType | null
    _max: SpecialtyMaxAggregateOutputType | null
  }

  export type SpecialtyAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialtySumAggregateOutputType = {
    id: number | null
  }

  export type SpecialtyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SpecialtyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SpecialtyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SpecialtyAvgAggregateInputType = {
    id?: true
  }

  export type SpecialtySumAggregateInputType = {
    id?: true
  }

  export type SpecialtyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SpecialtyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SpecialtyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SpecialtyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialty to aggregate.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialties
    **/
    _count?: true | SpecialtyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialtyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialtySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialtyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialtyMaxAggregateInputType
  }

  export type GetSpecialtyAggregateType<T extends SpecialtyAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialty[P]>
      : GetScalarType<T[P], AggregateSpecialty[P]>
  }




  export type SpecialtyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialtyWhereInput
    orderBy?: SpecialtyOrderByWithAggregationInput | SpecialtyOrderByWithAggregationInput[]
    by: SpecialtyScalarFieldEnum[] | SpecialtyScalarFieldEnum
    having?: SpecialtyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialtyCountAggregateInputType | true
    _avg?: SpecialtyAvgAggregateInputType
    _sum?: SpecialtySumAggregateInputType
    _min?: SpecialtyMinAggregateInputType
    _max?: SpecialtyMaxAggregateInputType
  }

  export type SpecialtyGroupByOutputType = {
    id: number
    name: string
    _count: SpecialtyCountAggregateOutputType | null
    _avg: SpecialtyAvgAggregateOutputType | null
    _sum: SpecialtySumAggregateOutputType | null
    _min: SpecialtyMinAggregateOutputType | null
    _max: SpecialtyMaxAggregateOutputType | null
  }

  type GetSpecialtyGroupByPayload<T extends SpecialtyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialtyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialtyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialtyGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialtyGroupByOutputType[P]>
        }
      >
    >


  export type SpecialtySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    professionals?: boolean | Specialty$professionalsArgs<ExtArgs>
    _count?: boolean | SpecialtyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["specialty"]>

  export type SpecialtySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SpecialtyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["specialty"]>
  export type SpecialtyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionals?: boolean | Specialty$professionalsArgs<ExtArgs>
    _count?: boolean | SpecialtyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialtyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialtyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialtyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialty"
    objects: {
      professionals: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["specialty"]>
    composites: {}
  }

  type SpecialtyGetPayload<S extends boolean | null | undefined | SpecialtyDefaultArgs> = $Result.GetResult<Prisma.$SpecialtyPayload, S>

  type SpecialtyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialtyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialtyCountAggregateInputType | true
    }

  export interface SpecialtyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialty'], meta: { name: 'Specialty' } }
    /**
     * Find zero or one Specialty that matches the filter.
     * @param {SpecialtyFindUniqueArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialtyFindUniqueArgs>(args: SelectSubset<T, SpecialtyFindUniqueArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialtyFindUniqueOrThrowArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialtyFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialtyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindFirstArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialtyFindFirstArgs>(args?: SelectSubset<T, SpecialtyFindFirstArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindFirstOrThrowArgs} args - Arguments to find a Specialty
     * @example
     * // Get one Specialty
     * const specialty = await prisma.specialty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialtyFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialtyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialties
     * const specialties = await prisma.specialty.findMany()
     * 
     * // Get first 10 Specialties
     * const specialties = await prisma.specialty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialtyWithIdOnly = await prisma.specialty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialtyFindManyArgs>(args?: SelectSubset<T, SpecialtyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialty.
     * @param {SpecialtyCreateArgs} args - Arguments to create a Specialty.
     * @example
     * // Create one Specialty
     * const Specialty = await prisma.specialty.create({
     *   data: {
     *     // ... data to create a Specialty
     *   }
     * })
     * 
     */
    create<T extends SpecialtyCreateArgs>(args: SelectSubset<T, SpecialtyCreateArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialties.
     * @param {SpecialtyCreateManyArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialty = await prisma.specialty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialtyCreateManyArgs>(args?: SelectSubset<T, SpecialtyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialties and returns the data saved in the database.
     * @param {SpecialtyCreateManyAndReturnArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialty = await prisma.specialty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialties and only return the `id`
     * const specialtyWithIdOnly = await prisma.specialty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialtyCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialtyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialty.
     * @param {SpecialtyDeleteArgs} args - Arguments to delete one Specialty.
     * @example
     * // Delete one Specialty
     * const Specialty = await prisma.specialty.delete({
     *   where: {
     *     // ... filter to delete one Specialty
     *   }
     * })
     * 
     */
    delete<T extends SpecialtyDeleteArgs>(args: SelectSubset<T, SpecialtyDeleteArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialty.
     * @param {SpecialtyUpdateArgs} args - Arguments to update one Specialty.
     * @example
     * // Update one Specialty
     * const specialty = await prisma.specialty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialtyUpdateArgs>(args: SelectSubset<T, SpecialtyUpdateArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialties.
     * @param {SpecialtyDeleteManyArgs} args - Arguments to filter Specialties to delete.
     * @example
     * // Delete a few Specialties
     * const { count } = await prisma.specialty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialtyDeleteManyArgs>(args?: SelectSubset<T, SpecialtyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialties
     * const specialty = await prisma.specialty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialtyUpdateManyArgs>(args: SelectSubset<T, SpecialtyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties and returns the data updated in the database.
     * @param {SpecialtyUpdateManyAndReturnArgs} args - Arguments to update many Specialties.
     * @example
     * // Update many Specialties
     * const specialty = await prisma.specialty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialties and only return the `id`
     * const specialtyWithIdOnly = await prisma.specialty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialtyUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialtyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialty.
     * @param {SpecialtyUpsertArgs} args - Arguments to update or create a Specialty.
     * @example
     * // Update or create a Specialty
     * const specialty = await prisma.specialty.upsert({
     *   create: {
     *     // ... data to create a Specialty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialty we want to update
     *   }
     * })
     */
    upsert<T extends SpecialtyUpsertArgs>(args: SelectSubset<T, SpecialtyUpsertArgs<ExtArgs>>): Prisma__SpecialtyClient<$Result.GetResult<Prisma.$SpecialtyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyCountArgs} args - Arguments to filter Specialties to count.
     * @example
     * // Count the number of Specialties
     * const count = await prisma.specialty.count({
     *   where: {
     *     // ... the filter for the Specialties we want to count
     *   }
     * })
    **/
    count<T extends SpecialtyCountArgs>(
      args?: Subset<T, SpecialtyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialtyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialtyAggregateArgs>(args: Subset<T, SpecialtyAggregateArgs>): Prisma.PrismaPromise<GetSpecialtyAggregateType<T>>

    /**
     * Group by Specialty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialtyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialtyGroupByArgs['orderBy'] }
        : { orderBy?: SpecialtyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialtyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialtyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialty model
   */
  readonly fields: SpecialtyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialtyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionals<T extends Specialty$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, Specialty$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specialty model
   */
  interface SpecialtyFieldRefs {
    readonly id: FieldRef<"Specialty", 'Int'>
    readonly name: FieldRef<"Specialty", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Specialty findUnique
   */
  export type SpecialtyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty findUniqueOrThrow
   */
  export type SpecialtyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty findFirst
   */
  export type SpecialtyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty findFirstOrThrow
   */
  export type SpecialtyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialty to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty findMany
   */
  export type SpecialtyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtyOrderByWithRelationInput | SpecialtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialties.
     */
    cursor?: SpecialtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    distinct?: SpecialtyScalarFieldEnum | SpecialtyScalarFieldEnum[]
  }

  /**
   * Specialty create
   */
  export type SpecialtyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialty.
     */
    data: XOR<SpecialtyCreateInput, SpecialtyUncheckedCreateInput>
  }

  /**
   * Specialty createMany
   */
  export type SpecialtyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtyCreateManyInput | SpecialtyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialty createManyAndReturn
   */
  export type SpecialtyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtyCreateManyInput | SpecialtyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialty update
   */
  export type SpecialtyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialty.
     */
    data: XOR<SpecialtyUpdateInput, SpecialtyUncheckedUpdateInput>
    /**
     * Choose, which Specialty to update.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty updateMany
   */
  export type SpecialtyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialty updateManyAndReturn
   */
  export type SpecialtyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialty upsert
   */
  export type SpecialtyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialty to update in case it exists.
     */
    where: SpecialtyWhereUniqueInput
    /**
     * In case the Specialty found by the `where` argument doesn't exist, create a new Specialty with this data.
     */
    create: XOR<SpecialtyCreateInput, SpecialtyUncheckedCreateInput>
    /**
     * In case the Specialty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialtyUpdateInput, SpecialtyUncheckedUpdateInput>
  }

  /**
   * Specialty delete
   */
  export type SpecialtyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
    /**
     * Filter which Specialty to delete.
     */
    where: SpecialtyWhereUniqueInput
  }

  /**
   * Specialty deleteMany
   */
  export type SpecialtyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to delete
     */
    where?: SpecialtyWhereInput
    /**
     * Limit how many Specialties to delete.
     */
    limit?: number
  }

  /**
   * Specialty.professionals
   */
  export type Specialty$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Specialty without action
   */
  export type SpecialtyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialty
     */
    select?: SpecialtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialty
     */
    omit?: SpecialtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtyInclude<ExtArgs> | null
  }


  /**
   * Model ClinicalHistory
   */

  export type AggregateClinicalHistory = {
    _count: ClinicalHistoryCountAggregateOutputType | null
    _avg: ClinicalHistoryAvgAggregateOutputType | null
    _sum: ClinicalHistorySumAggregateOutputType | null
    _min: ClinicalHistoryMinAggregateOutputType | null
    _max: ClinicalHistoryMaxAggregateOutputType | null
  }

  export type ClinicalHistoryAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type ClinicalHistorySumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type ClinicalHistoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    patientId: number | null
  }

  export type ClinicalHistoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    patientId: number | null
  }

  export type ClinicalHistoryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    patientId: number
    _all: number
  }


  export type ClinicalHistoryAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type ClinicalHistorySumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type ClinicalHistoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    patientId?: true
  }

  export type ClinicalHistoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    patientId?: true
  }

  export type ClinicalHistoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    patientId?: true
    _all?: true
  }

  export type ClinicalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClinicalHistory to aggregate.
     */
    where?: ClinicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicalHistories to fetch.
     */
    orderBy?: ClinicalHistoryOrderByWithRelationInput | ClinicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClinicalHistories
    **/
    _count?: true | ClinicalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicalHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicalHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicalHistoryMaxAggregateInputType
  }

  export type GetClinicalHistoryAggregateType<T extends ClinicalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateClinicalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinicalHistory[P]>
      : GetScalarType<T[P], AggregateClinicalHistory[P]>
  }




  export type ClinicalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicalHistoryWhereInput
    orderBy?: ClinicalHistoryOrderByWithAggregationInput | ClinicalHistoryOrderByWithAggregationInput[]
    by: ClinicalHistoryScalarFieldEnum[] | ClinicalHistoryScalarFieldEnum
    having?: ClinicalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicalHistoryCountAggregateInputType | true
    _avg?: ClinicalHistoryAvgAggregateInputType
    _sum?: ClinicalHistorySumAggregateInputType
    _min?: ClinicalHistoryMinAggregateInputType
    _max?: ClinicalHistoryMaxAggregateInputType
  }

  export type ClinicalHistoryGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    patientId: number
    _count: ClinicalHistoryCountAggregateOutputType | null
    _avg: ClinicalHistoryAvgAggregateOutputType | null
    _sum: ClinicalHistorySumAggregateOutputType | null
    _min: ClinicalHistoryMinAggregateOutputType | null
    _max: ClinicalHistoryMaxAggregateOutputType | null
  }

  type GetClinicalHistoryGroupByPayload<T extends ClinicalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ClinicalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    visits?: boolean | ClinicalHistory$visitsArgs<ExtArgs>
    _count?: boolean | ClinicalHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicalHistory"]>

  export type ClinicalHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicalHistory"]>

  export type ClinicalHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicalHistory"]>

  export type ClinicalHistorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientId?: boolean
  }

  export type ClinicalHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "patientId", ExtArgs["result"]["clinicalHistory"]>
  export type ClinicalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    visits?: boolean | ClinicalHistory$visitsArgs<ExtArgs>
    _count?: boolean | ClinicalHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClinicalHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type ClinicalHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $ClinicalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClinicalHistory"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      visits: Prisma.$VisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      patientId: number
    }, ExtArgs["result"]["clinicalHistory"]>
    composites: {}
  }

  type ClinicalHistoryGetPayload<S extends boolean | null | undefined | ClinicalHistoryDefaultArgs> = $Result.GetResult<Prisma.$ClinicalHistoryPayload, S>

  type ClinicalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicalHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicalHistoryCountAggregateInputType | true
    }

  export interface ClinicalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClinicalHistory'], meta: { name: 'ClinicalHistory' } }
    /**
     * Find zero or one ClinicalHistory that matches the filter.
     * @param {ClinicalHistoryFindUniqueArgs} args - Arguments to find a ClinicalHistory
     * @example
     * // Get one ClinicalHistory
     * const clinicalHistory = await prisma.clinicalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicalHistoryFindUniqueArgs>(args: SelectSubset<T, ClinicalHistoryFindUniqueArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClinicalHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicalHistoryFindUniqueOrThrowArgs} args - Arguments to find a ClinicalHistory
     * @example
     * // Get one ClinicalHistory
     * const clinicalHistory = await prisma.clinicalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicalHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicalHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClinicalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalHistoryFindFirstArgs} args - Arguments to find a ClinicalHistory
     * @example
     * // Get one ClinicalHistory
     * const clinicalHistory = await prisma.clinicalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicalHistoryFindFirstArgs>(args?: SelectSubset<T, ClinicalHistoryFindFirstArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClinicalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalHistoryFindFirstOrThrowArgs} args - Arguments to find a ClinicalHistory
     * @example
     * // Get one ClinicalHistory
     * const clinicalHistory = await prisma.clinicalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicalHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicalHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClinicalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClinicalHistories
     * const clinicalHistories = await prisma.clinicalHistory.findMany()
     * 
     * // Get first 10 ClinicalHistories
     * const clinicalHistories = await prisma.clinicalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicalHistoryWithIdOnly = await prisma.clinicalHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicalHistoryFindManyArgs>(args?: SelectSubset<T, ClinicalHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClinicalHistory.
     * @param {ClinicalHistoryCreateArgs} args - Arguments to create a ClinicalHistory.
     * @example
     * // Create one ClinicalHistory
     * const ClinicalHistory = await prisma.clinicalHistory.create({
     *   data: {
     *     // ... data to create a ClinicalHistory
     *   }
     * })
     * 
     */
    create<T extends ClinicalHistoryCreateArgs>(args: SelectSubset<T, ClinicalHistoryCreateArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClinicalHistories.
     * @param {ClinicalHistoryCreateManyArgs} args - Arguments to create many ClinicalHistories.
     * @example
     * // Create many ClinicalHistories
     * const clinicalHistory = await prisma.clinicalHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicalHistoryCreateManyArgs>(args?: SelectSubset<T, ClinicalHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClinicalHistories and returns the data saved in the database.
     * @param {ClinicalHistoryCreateManyAndReturnArgs} args - Arguments to create many ClinicalHistories.
     * @example
     * // Create many ClinicalHistories
     * const clinicalHistory = await prisma.clinicalHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClinicalHistories and only return the `id`
     * const clinicalHistoryWithIdOnly = await prisma.clinicalHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicalHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicalHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClinicalHistory.
     * @param {ClinicalHistoryDeleteArgs} args - Arguments to delete one ClinicalHistory.
     * @example
     * // Delete one ClinicalHistory
     * const ClinicalHistory = await prisma.clinicalHistory.delete({
     *   where: {
     *     // ... filter to delete one ClinicalHistory
     *   }
     * })
     * 
     */
    delete<T extends ClinicalHistoryDeleteArgs>(args: SelectSubset<T, ClinicalHistoryDeleteArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClinicalHistory.
     * @param {ClinicalHistoryUpdateArgs} args - Arguments to update one ClinicalHistory.
     * @example
     * // Update one ClinicalHistory
     * const clinicalHistory = await prisma.clinicalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicalHistoryUpdateArgs>(args: SelectSubset<T, ClinicalHistoryUpdateArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClinicalHistories.
     * @param {ClinicalHistoryDeleteManyArgs} args - Arguments to filter ClinicalHistories to delete.
     * @example
     * // Delete a few ClinicalHistories
     * const { count } = await prisma.clinicalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicalHistoryDeleteManyArgs>(args?: SelectSubset<T, ClinicalHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClinicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClinicalHistories
     * const clinicalHistory = await prisma.clinicalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicalHistoryUpdateManyArgs>(args: SelectSubset<T, ClinicalHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClinicalHistories and returns the data updated in the database.
     * @param {ClinicalHistoryUpdateManyAndReturnArgs} args - Arguments to update many ClinicalHistories.
     * @example
     * // Update many ClinicalHistories
     * const clinicalHistory = await prisma.clinicalHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClinicalHistories and only return the `id`
     * const clinicalHistoryWithIdOnly = await prisma.clinicalHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClinicalHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicalHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClinicalHistory.
     * @param {ClinicalHistoryUpsertArgs} args - Arguments to update or create a ClinicalHistory.
     * @example
     * // Update or create a ClinicalHistory
     * const clinicalHistory = await prisma.clinicalHistory.upsert({
     *   create: {
     *     // ... data to create a ClinicalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClinicalHistory we want to update
     *   }
     * })
     */
    upsert<T extends ClinicalHistoryUpsertArgs>(args: SelectSubset<T, ClinicalHistoryUpsertArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClinicalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalHistoryCountArgs} args - Arguments to filter ClinicalHistories to count.
     * @example
     * // Count the number of ClinicalHistories
     * const count = await prisma.clinicalHistory.count({
     *   where: {
     *     // ... the filter for the ClinicalHistories we want to count
     *   }
     * })
    **/
    count<T extends ClinicalHistoryCountArgs>(
      args?: Subset<T, ClinicalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClinicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClinicalHistoryAggregateArgs>(args: Subset<T, ClinicalHistoryAggregateArgs>): Prisma.PrismaPromise<GetClinicalHistoryAggregateType<T>>

    /**
     * Group by ClinicalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClinicalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ClinicalHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClinicalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClinicalHistory model
   */
  readonly fields: ClinicalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClinicalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visits<T extends ClinicalHistory$visitsArgs<ExtArgs> = {}>(args?: Subset<T, ClinicalHistory$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClinicalHistory model
   */
  interface ClinicalHistoryFieldRefs {
    readonly id: FieldRef<"ClinicalHistory", 'Int'>
    readonly createdAt: FieldRef<"ClinicalHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ClinicalHistory", 'DateTime'>
    readonly patientId: FieldRef<"ClinicalHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClinicalHistory findUnique
   */
  export type ClinicalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalHistory to fetch.
     */
    where: ClinicalHistoryWhereUniqueInput
  }

  /**
   * ClinicalHistory findUniqueOrThrow
   */
  export type ClinicalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalHistory to fetch.
     */
    where: ClinicalHistoryWhereUniqueInput
  }

  /**
   * ClinicalHistory findFirst
   */
  export type ClinicalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalHistory to fetch.
     */
    where?: ClinicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicalHistories to fetch.
     */
    orderBy?: ClinicalHistoryOrderByWithRelationInput | ClinicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClinicalHistories.
     */
    cursor?: ClinicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicalHistories.
     */
    distinct?: ClinicalHistoryScalarFieldEnum | ClinicalHistoryScalarFieldEnum[]
  }

  /**
   * ClinicalHistory findFirstOrThrow
   */
  export type ClinicalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalHistory to fetch.
     */
    where?: ClinicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicalHistories to fetch.
     */
    orderBy?: ClinicalHistoryOrderByWithRelationInput | ClinicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClinicalHistories.
     */
    cursor?: ClinicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicalHistories.
     */
    distinct?: ClinicalHistoryScalarFieldEnum | ClinicalHistoryScalarFieldEnum[]
  }

  /**
   * ClinicalHistory findMany
   */
  export type ClinicalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalHistories to fetch.
     */
    where?: ClinicalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicalHistories to fetch.
     */
    orderBy?: ClinicalHistoryOrderByWithRelationInput | ClinicalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClinicalHistories.
     */
    cursor?: ClinicalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicalHistories.
     */
    skip?: number
    distinct?: ClinicalHistoryScalarFieldEnum | ClinicalHistoryScalarFieldEnum[]
  }

  /**
   * ClinicalHistory create
   */
  export type ClinicalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ClinicalHistory.
     */
    data: XOR<ClinicalHistoryCreateInput, ClinicalHistoryUncheckedCreateInput>
  }

  /**
   * ClinicalHistory createMany
   */
  export type ClinicalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClinicalHistories.
     */
    data: ClinicalHistoryCreateManyInput | ClinicalHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClinicalHistory createManyAndReturn
   */
  export type ClinicalHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ClinicalHistories.
     */
    data: ClinicalHistoryCreateManyInput | ClinicalHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClinicalHistory update
   */
  export type ClinicalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ClinicalHistory.
     */
    data: XOR<ClinicalHistoryUpdateInput, ClinicalHistoryUncheckedUpdateInput>
    /**
     * Choose, which ClinicalHistory to update.
     */
    where: ClinicalHistoryWhereUniqueInput
  }

  /**
   * ClinicalHistory updateMany
   */
  export type ClinicalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClinicalHistories.
     */
    data: XOR<ClinicalHistoryUpdateManyMutationInput, ClinicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ClinicalHistories to update
     */
    where?: ClinicalHistoryWhereInput
    /**
     * Limit how many ClinicalHistories to update.
     */
    limit?: number
  }

  /**
   * ClinicalHistory updateManyAndReturn
   */
  export type ClinicalHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ClinicalHistories.
     */
    data: XOR<ClinicalHistoryUpdateManyMutationInput, ClinicalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ClinicalHistories to update
     */
    where?: ClinicalHistoryWhereInput
    /**
     * Limit how many ClinicalHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClinicalHistory upsert
   */
  export type ClinicalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ClinicalHistory to update in case it exists.
     */
    where: ClinicalHistoryWhereUniqueInput
    /**
     * In case the ClinicalHistory found by the `where` argument doesn't exist, create a new ClinicalHistory with this data.
     */
    create: XOR<ClinicalHistoryCreateInput, ClinicalHistoryUncheckedCreateInput>
    /**
     * In case the ClinicalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicalHistoryUpdateInput, ClinicalHistoryUncheckedUpdateInput>
  }

  /**
   * ClinicalHistory delete
   */
  export type ClinicalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
    /**
     * Filter which ClinicalHistory to delete.
     */
    where: ClinicalHistoryWhereUniqueInput
  }

  /**
   * ClinicalHistory deleteMany
   */
  export type ClinicalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClinicalHistories to delete
     */
    where?: ClinicalHistoryWhereInput
    /**
     * Limit how many ClinicalHistories to delete.
     */
    limit?: number
  }

  /**
   * ClinicalHistory.visits
   */
  export type ClinicalHistory$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    cursor?: VisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * ClinicalHistory without action
   */
  export type ClinicalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalHistory
     */
    select?: ClinicalHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalHistory
     */
    omit?: ClinicalHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Visit
   */

  export type AggregateVisit = {
    _count: VisitCountAggregateOutputType | null
    _avg: VisitAvgAggregateOutputType | null
    _sum: VisitSumAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  export type VisitAvgAggregateOutputType = {
    id: number | null
    clinicalHistoryId: number | null
    professionalId: number | null
  }

  export type VisitSumAggregateOutputType = {
    id: number | null
    clinicalHistoryId: number | null
    professionalId: number | null
  }

  export type VisitMinAggregateOutputType = {
    id: number | null
    visitDate: Date | null
    reason: string | null
    epicrisis: string | null
    diagnosis: string | null
    treatment: string | null
    clinicalHistoryId: number | null
    professionalId: number | null
  }

  export type VisitMaxAggregateOutputType = {
    id: number | null
    visitDate: Date | null
    reason: string | null
    epicrisis: string | null
    diagnosis: string | null
    treatment: string | null
    clinicalHistoryId: number | null
    professionalId: number | null
  }

  export type VisitCountAggregateOutputType = {
    id: number
    visitDate: number
    reason: number
    epicrisis: number
    diagnosis: number
    treatment: number
    clinicalHistoryId: number
    professionalId: number
    _all: number
  }


  export type VisitAvgAggregateInputType = {
    id?: true
    clinicalHistoryId?: true
    professionalId?: true
  }

  export type VisitSumAggregateInputType = {
    id?: true
    clinicalHistoryId?: true
    professionalId?: true
  }

  export type VisitMinAggregateInputType = {
    id?: true
    visitDate?: true
    reason?: true
    epicrisis?: true
    diagnosis?: true
    treatment?: true
    clinicalHistoryId?: true
    professionalId?: true
  }

  export type VisitMaxAggregateInputType = {
    id?: true
    visitDate?: true
    reason?: true
    epicrisis?: true
    diagnosis?: true
    treatment?: true
    clinicalHistoryId?: true
    professionalId?: true
  }

  export type VisitCountAggregateInputType = {
    id?: true
    visitDate?: true
    reason?: true
    epicrisis?: true
    diagnosis?: true
    treatment?: true
    clinicalHistoryId?: true
    professionalId?: true
    _all?: true
  }

  export type VisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visit to aggregate.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visits
    **/
    _count?: true | VisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitMaxAggregateInputType
  }

  export type GetVisitAggregateType<T extends VisitAggregateArgs> = {
        [P in keyof T & keyof AggregateVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisit[P]>
      : GetScalarType<T[P], AggregateVisit[P]>
  }




  export type VisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithAggregationInput | VisitOrderByWithAggregationInput[]
    by: VisitScalarFieldEnum[] | VisitScalarFieldEnum
    having?: VisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitCountAggregateInputType | true
    _avg?: VisitAvgAggregateInputType
    _sum?: VisitSumAggregateInputType
    _min?: VisitMinAggregateInputType
    _max?: VisitMaxAggregateInputType
  }

  export type VisitGroupByOutputType = {
    id: number
    visitDate: Date
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistoryId: number
    professionalId: number
    _count: VisitCountAggregateOutputType | null
    _avg: VisitAvgAggregateOutputType | null
    _sum: VisitSumAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  type GetVisitGroupByPayload<T extends VisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitGroupByOutputType[P]>
            : GetScalarType<T[P], VisitGroupByOutputType[P]>
        }
      >
    >


  export type VisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitDate?: boolean
    reason?: boolean
    epicrisis?: boolean
    diagnosis?: boolean
    treatment?: boolean
    clinicalHistoryId?: boolean
    professionalId?: boolean
    clinicalHistory?: boolean | ClinicalHistoryDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    studies?: boolean | Visit$studiesArgs<ExtArgs>
    _count?: boolean | VisitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitDate?: boolean
    reason?: boolean
    epicrisis?: boolean
    diagnosis?: boolean
    treatment?: boolean
    clinicalHistoryId?: boolean
    professionalId?: boolean
    clinicalHistory?: boolean | ClinicalHistoryDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitDate?: boolean
    reason?: boolean
    epicrisis?: boolean
    diagnosis?: boolean
    treatment?: boolean
    clinicalHistoryId?: boolean
    professionalId?: boolean
    clinicalHistory?: boolean | ClinicalHistoryDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectScalar = {
    id?: boolean
    visitDate?: boolean
    reason?: boolean
    epicrisis?: boolean
    diagnosis?: boolean
    treatment?: boolean
    clinicalHistoryId?: boolean
    professionalId?: boolean
  }

  export type VisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitDate" | "reason" | "epicrisis" | "diagnosis" | "treatment" | "clinicalHistoryId" | "professionalId", ExtArgs["result"]["visit"]>
  export type VisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinicalHistory?: boolean | ClinicalHistoryDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
    studies?: boolean | Visit$studiesArgs<ExtArgs>
    _count?: boolean | VisitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinicalHistory?: boolean | ClinicalHistoryDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinicalHistory?: boolean | ClinicalHistoryDefaultArgs<ExtArgs>
    professional?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visit"
    objects: {
      clinicalHistory: Prisma.$ClinicalHistoryPayload<ExtArgs>
      professional: Prisma.$UserPayload<ExtArgs>
      studies: Prisma.$MedicalStudyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      visitDate: Date
      reason: string
      epicrisis: string
      diagnosis: string
      treatment: string
      clinicalHistoryId: number
      professionalId: number
    }, ExtArgs["result"]["visit"]>
    composites: {}
  }

  type VisitGetPayload<S extends boolean | null | undefined | VisitDefaultArgs> = $Result.GetResult<Prisma.$VisitPayload, S>

  type VisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitCountAggregateInputType | true
    }

  export interface VisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visit'], meta: { name: 'Visit' } }
    /**
     * Find zero or one Visit that matches the filter.
     * @param {VisitFindUniqueArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitFindUniqueArgs>(args: SelectSubset<T, VisitFindUniqueArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitFindUniqueOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitFindFirstArgs>(args?: SelectSubset<T, VisitFindFirstArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visits
     * const visits = await prisma.visit.findMany()
     * 
     * // Get first 10 Visits
     * const visits = await prisma.visit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitWithIdOnly = await prisma.visit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitFindManyArgs>(args?: SelectSubset<T, VisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visit.
     * @param {VisitCreateArgs} args - Arguments to create a Visit.
     * @example
     * // Create one Visit
     * const Visit = await prisma.visit.create({
     *   data: {
     *     // ... data to create a Visit
     *   }
     * })
     * 
     */
    create<T extends VisitCreateArgs>(args: SelectSubset<T, VisitCreateArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visits.
     * @param {VisitCreateManyArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitCreateManyArgs>(args?: SelectSubset<T, VisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visits and returns the data saved in the database.
     * @param {VisitCreateManyAndReturnArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visits and only return the `id`
     * const visitWithIdOnly = await prisma.visit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visit.
     * @param {VisitDeleteArgs} args - Arguments to delete one Visit.
     * @example
     * // Delete one Visit
     * const Visit = await prisma.visit.delete({
     *   where: {
     *     // ... filter to delete one Visit
     *   }
     * })
     * 
     */
    delete<T extends VisitDeleteArgs>(args: SelectSubset<T, VisitDeleteArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visit.
     * @param {VisitUpdateArgs} args - Arguments to update one Visit.
     * @example
     * // Update one Visit
     * const visit = await prisma.visit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitUpdateArgs>(args: SelectSubset<T, VisitUpdateArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visits.
     * @param {VisitDeleteManyArgs} args - Arguments to filter Visits to delete.
     * @example
     * // Delete a few Visits
     * const { count } = await prisma.visit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitDeleteManyArgs>(args?: SelectSubset<T, VisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitUpdateManyArgs>(args: SelectSubset<T, VisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits and returns the data updated in the database.
     * @param {VisitUpdateManyAndReturnArgs} args - Arguments to update many Visits.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visits and only return the `id`
     * const visitWithIdOnly = await prisma.visit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visit.
     * @param {VisitUpsertArgs} args - Arguments to update or create a Visit.
     * @example
     * // Update or create a Visit
     * const visit = await prisma.visit.upsert({
     *   create: {
     *     // ... data to create a Visit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visit we want to update
     *   }
     * })
     */
    upsert<T extends VisitUpsertArgs>(args: SelectSubset<T, VisitUpsertArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitCountArgs} args - Arguments to filter Visits to count.
     * @example
     * // Count the number of Visits
     * const count = await prisma.visit.count({
     *   where: {
     *     // ... the filter for the Visits we want to count
     *   }
     * })
    **/
    count<T extends VisitCountArgs>(
      args?: Subset<T, VisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitAggregateArgs>(args: Subset<T, VisitAggregateArgs>): Prisma.PrismaPromise<GetVisitAggregateType<T>>

    /**
     * Group by Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitGroupByArgs['orderBy'] }
        : { orderBy?: VisitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visit model
   */
  readonly fields: VisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinicalHistory<T extends ClinicalHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicalHistoryDefaultArgs<ExtArgs>>): Prisma__ClinicalHistoryClient<$Result.GetResult<Prisma.$ClinicalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professional<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studies<T extends Visit$studiesArgs<ExtArgs> = {}>(args?: Subset<T, Visit$studiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visit model
   */
  interface VisitFieldRefs {
    readonly id: FieldRef<"Visit", 'Int'>
    readonly visitDate: FieldRef<"Visit", 'DateTime'>
    readonly reason: FieldRef<"Visit", 'String'>
    readonly epicrisis: FieldRef<"Visit", 'String'>
    readonly diagnosis: FieldRef<"Visit", 'String'>
    readonly treatment: FieldRef<"Visit", 'String'>
    readonly clinicalHistoryId: FieldRef<"Visit", 'Int'>
    readonly professionalId: FieldRef<"Visit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Visit findUnique
   */
  export type VisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit findUniqueOrThrow
   */
  export type VisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit findFirst
   */
  export type VisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit findFirstOrThrow
   */
  export type VisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit findMany
   */
  export type VisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visits to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit create
   */
  export type VisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to create a Visit.
     */
    data: XOR<VisitCreateInput, VisitUncheckedCreateInput>
  }

  /**
   * Visit createMany
   */
  export type VisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visit createManyAndReturn
   */
  export type VisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visit update
   */
  export type VisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to update a Visit.
     */
    data: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
    /**
     * Choose, which Visit to update.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit updateMany
   */
  export type VisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to update.
     */
    limit?: number
  }

  /**
   * Visit updateManyAndReturn
   */
  export type VisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visit upsert
   */
  export type VisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The filter to search for the Visit to update in case it exists.
     */
    where: VisitWhereUniqueInput
    /**
     * In case the Visit found by the `where` argument doesn't exist, create a new Visit with this data.
     */
    create: XOR<VisitCreateInput, VisitUncheckedCreateInput>
    /**
     * In case the Visit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
  }

  /**
   * Visit delete
   */
  export type VisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter which Visit to delete.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit deleteMany
   */
  export type VisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visits to delete
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to delete.
     */
    limit?: number
  }

  /**
   * Visit.studies
   */
  export type Visit$studiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    where?: MedicalStudyWhereInput
    orderBy?: MedicalStudyOrderByWithRelationInput | MedicalStudyOrderByWithRelationInput[]
    cursor?: MedicalStudyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalStudyScalarFieldEnum | MedicalStudyScalarFieldEnum[]
  }

  /**
   * Visit without action
   */
  export type VisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
  }


  /**
   * Model MedicalStudy
   */

  export type AggregateMedicalStudy = {
    _count: MedicalStudyCountAggregateOutputType | null
    _avg: MedicalStudyAvgAggregateOutputType | null
    _sum: MedicalStudySumAggregateOutputType | null
    _min: MedicalStudyMinAggregateOutputType | null
    _max: MedicalStudyMaxAggregateOutputType | null
  }

  export type MedicalStudyAvgAggregateOutputType = {
    id: number | null
    visitId: number | null
  }

  export type MedicalStudySumAggregateOutputType = {
    id: number | null
    visitId: number | null
  }

  export type MedicalStudyMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    fileUrl: string | null
    fileType: string | null
    uploadedAt: Date | null
    visitId: number | null
  }

  export type MedicalStudyMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    fileUrl: string | null
    fileType: string | null
    uploadedAt: Date | null
    visitId: number | null
  }

  export type MedicalStudyCountAggregateOutputType = {
    id: number
    fileName: number
    fileUrl: number
    fileType: number
    uploadedAt: number
    visitId: number
    _all: number
  }


  export type MedicalStudyAvgAggregateInputType = {
    id?: true
    visitId?: true
  }

  export type MedicalStudySumAggregateInputType = {
    id?: true
    visitId?: true
  }

  export type MedicalStudyMinAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    uploadedAt?: true
    visitId?: true
  }

  export type MedicalStudyMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    uploadedAt?: true
    visitId?: true
  }

  export type MedicalStudyCountAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    fileType?: true
    uploadedAt?: true
    visitId?: true
    _all?: true
  }

  export type MedicalStudyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalStudy to aggregate.
     */
    where?: MedicalStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalStudies to fetch.
     */
    orderBy?: MedicalStudyOrderByWithRelationInput | MedicalStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalStudies
    **/
    _count?: true | MedicalStudyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalStudyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalStudySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalStudyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalStudyMaxAggregateInputType
  }

  export type GetMedicalStudyAggregateType<T extends MedicalStudyAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalStudy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalStudy[P]>
      : GetScalarType<T[P], AggregateMedicalStudy[P]>
  }




  export type MedicalStudyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalStudyWhereInput
    orderBy?: MedicalStudyOrderByWithAggregationInput | MedicalStudyOrderByWithAggregationInput[]
    by: MedicalStudyScalarFieldEnum[] | MedicalStudyScalarFieldEnum
    having?: MedicalStudyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalStudyCountAggregateInputType | true
    _avg?: MedicalStudyAvgAggregateInputType
    _sum?: MedicalStudySumAggregateInputType
    _min?: MedicalStudyMinAggregateInputType
    _max?: MedicalStudyMaxAggregateInputType
  }

  export type MedicalStudyGroupByOutputType = {
    id: number
    fileName: string
    fileUrl: string
    fileType: string
    uploadedAt: Date
    visitId: number
    _count: MedicalStudyCountAggregateOutputType | null
    _avg: MedicalStudyAvgAggregateOutputType | null
    _sum: MedicalStudySumAggregateOutputType | null
    _min: MedicalStudyMinAggregateOutputType | null
    _max: MedicalStudyMaxAggregateOutputType | null
  }

  type GetMedicalStudyGroupByPayload<T extends MedicalStudyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalStudyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalStudyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalStudyGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalStudyGroupByOutputType[P]>
        }
      >
    >


  export type MedicalStudySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    visitId?: boolean
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalStudy"]>

  export type MedicalStudySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    visitId?: boolean
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalStudy"]>

  export type MedicalStudySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    visitId?: boolean
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalStudy"]>

  export type MedicalStudySelectScalar = {
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    visitId?: boolean
  }

  export type MedicalStudyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileUrl" | "fileType" | "uploadedAt" | "visitId", ExtArgs["result"]["medicalStudy"]>
  export type MedicalStudyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }
  export type MedicalStudyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }
  export type MedicalStudyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | VisitDefaultArgs<ExtArgs>
  }

  export type $MedicalStudyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalStudy"
    objects: {
      visit: Prisma.$VisitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      fileUrl: string
      fileType: string
      uploadedAt: Date
      visitId: number
    }, ExtArgs["result"]["medicalStudy"]>
    composites: {}
  }

  type MedicalStudyGetPayload<S extends boolean | null | undefined | MedicalStudyDefaultArgs> = $Result.GetResult<Prisma.$MedicalStudyPayload, S>

  type MedicalStudyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalStudyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalStudyCountAggregateInputType | true
    }

  export interface MedicalStudyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalStudy'], meta: { name: 'MedicalStudy' } }
    /**
     * Find zero or one MedicalStudy that matches the filter.
     * @param {MedicalStudyFindUniqueArgs} args - Arguments to find a MedicalStudy
     * @example
     * // Get one MedicalStudy
     * const medicalStudy = await prisma.medicalStudy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalStudyFindUniqueArgs>(args: SelectSubset<T, MedicalStudyFindUniqueArgs<ExtArgs>>): Prisma__MedicalStudyClient<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalStudy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalStudyFindUniqueOrThrowArgs} args - Arguments to find a MedicalStudy
     * @example
     * // Get one MedicalStudy
     * const medicalStudy = await prisma.medicalStudy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalStudyFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalStudyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalStudyClient<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalStudy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalStudyFindFirstArgs} args - Arguments to find a MedicalStudy
     * @example
     * // Get one MedicalStudy
     * const medicalStudy = await prisma.medicalStudy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalStudyFindFirstArgs>(args?: SelectSubset<T, MedicalStudyFindFirstArgs<ExtArgs>>): Prisma__MedicalStudyClient<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalStudy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalStudyFindFirstOrThrowArgs} args - Arguments to find a MedicalStudy
     * @example
     * // Get one MedicalStudy
     * const medicalStudy = await prisma.medicalStudy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalStudyFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalStudyFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalStudyClient<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalStudies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalStudyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalStudies
     * const medicalStudies = await prisma.medicalStudy.findMany()
     * 
     * // Get first 10 MedicalStudies
     * const medicalStudies = await prisma.medicalStudy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalStudyWithIdOnly = await prisma.medicalStudy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalStudyFindManyArgs>(args?: SelectSubset<T, MedicalStudyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalStudy.
     * @param {MedicalStudyCreateArgs} args - Arguments to create a MedicalStudy.
     * @example
     * // Create one MedicalStudy
     * const MedicalStudy = await prisma.medicalStudy.create({
     *   data: {
     *     // ... data to create a MedicalStudy
     *   }
     * })
     * 
     */
    create<T extends MedicalStudyCreateArgs>(args: SelectSubset<T, MedicalStudyCreateArgs<ExtArgs>>): Prisma__MedicalStudyClient<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalStudies.
     * @param {MedicalStudyCreateManyArgs} args - Arguments to create many MedicalStudies.
     * @example
     * // Create many MedicalStudies
     * const medicalStudy = await prisma.medicalStudy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalStudyCreateManyArgs>(args?: SelectSubset<T, MedicalStudyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalStudies and returns the data saved in the database.
     * @param {MedicalStudyCreateManyAndReturnArgs} args - Arguments to create many MedicalStudies.
     * @example
     * // Create many MedicalStudies
     * const medicalStudy = await prisma.medicalStudy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalStudies and only return the `id`
     * const medicalStudyWithIdOnly = await prisma.medicalStudy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalStudyCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalStudyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalStudy.
     * @param {MedicalStudyDeleteArgs} args - Arguments to delete one MedicalStudy.
     * @example
     * // Delete one MedicalStudy
     * const MedicalStudy = await prisma.medicalStudy.delete({
     *   where: {
     *     // ... filter to delete one MedicalStudy
     *   }
     * })
     * 
     */
    delete<T extends MedicalStudyDeleteArgs>(args: SelectSubset<T, MedicalStudyDeleteArgs<ExtArgs>>): Prisma__MedicalStudyClient<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalStudy.
     * @param {MedicalStudyUpdateArgs} args - Arguments to update one MedicalStudy.
     * @example
     * // Update one MedicalStudy
     * const medicalStudy = await prisma.medicalStudy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalStudyUpdateArgs>(args: SelectSubset<T, MedicalStudyUpdateArgs<ExtArgs>>): Prisma__MedicalStudyClient<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalStudies.
     * @param {MedicalStudyDeleteManyArgs} args - Arguments to filter MedicalStudies to delete.
     * @example
     * // Delete a few MedicalStudies
     * const { count } = await prisma.medicalStudy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalStudyDeleteManyArgs>(args?: SelectSubset<T, MedicalStudyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalStudies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalStudyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalStudies
     * const medicalStudy = await prisma.medicalStudy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalStudyUpdateManyArgs>(args: SelectSubset<T, MedicalStudyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalStudies and returns the data updated in the database.
     * @param {MedicalStudyUpdateManyAndReturnArgs} args - Arguments to update many MedicalStudies.
     * @example
     * // Update many MedicalStudies
     * const medicalStudy = await prisma.medicalStudy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalStudies and only return the `id`
     * const medicalStudyWithIdOnly = await prisma.medicalStudy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalStudyUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalStudyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalStudy.
     * @param {MedicalStudyUpsertArgs} args - Arguments to update or create a MedicalStudy.
     * @example
     * // Update or create a MedicalStudy
     * const medicalStudy = await prisma.medicalStudy.upsert({
     *   create: {
     *     // ... data to create a MedicalStudy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalStudy we want to update
     *   }
     * })
     */
    upsert<T extends MedicalStudyUpsertArgs>(args: SelectSubset<T, MedicalStudyUpsertArgs<ExtArgs>>): Prisma__MedicalStudyClient<$Result.GetResult<Prisma.$MedicalStudyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalStudies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalStudyCountArgs} args - Arguments to filter MedicalStudies to count.
     * @example
     * // Count the number of MedicalStudies
     * const count = await prisma.medicalStudy.count({
     *   where: {
     *     // ... the filter for the MedicalStudies we want to count
     *   }
     * })
    **/
    count<T extends MedicalStudyCountArgs>(
      args?: Subset<T, MedicalStudyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalStudyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalStudy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalStudyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalStudyAggregateArgs>(args: Subset<T, MedicalStudyAggregateArgs>): Prisma.PrismaPromise<GetMedicalStudyAggregateType<T>>

    /**
     * Group by MedicalStudy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalStudyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalStudyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalStudyGroupByArgs['orderBy'] }
        : { orderBy?: MedicalStudyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalStudyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalStudyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalStudy model
   */
  readonly fields: MedicalStudyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalStudy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalStudyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visit<T extends VisitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitDefaultArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicalStudy model
   */
  interface MedicalStudyFieldRefs {
    readonly id: FieldRef<"MedicalStudy", 'Int'>
    readonly fileName: FieldRef<"MedicalStudy", 'String'>
    readonly fileUrl: FieldRef<"MedicalStudy", 'String'>
    readonly fileType: FieldRef<"MedicalStudy", 'String'>
    readonly uploadedAt: FieldRef<"MedicalStudy", 'DateTime'>
    readonly visitId: FieldRef<"MedicalStudy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MedicalStudy findUnique
   */
  export type MedicalStudyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * Filter, which MedicalStudy to fetch.
     */
    where: MedicalStudyWhereUniqueInput
  }

  /**
   * MedicalStudy findUniqueOrThrow
   */
  export type MedicalStudyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * Filter, which MedicalStudy to fetch.
     */
    where: MedicalStudyWhereUniqueInput
  }

  /**
   * MedicalStudy findFirst
   */
  export type MedicalStudyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * Filter, which MedicalStudy to fetch.
     */
    where?: MedicalStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalStudies to fetch.
     */
    orderBy?: MedicalStudyOrderByWithRelationInput | MedicalStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalStudies.
     */
    cursor?: MedicalStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalStudies.
     */
    distinct?: MedicalStudyScalarFieldEnum | MedicalStudyScalarFieldEnum[]
  }

  /**
   * MedicalStudy findFirstOrThrow
   */
  export type MedicalStudyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * Filter, which MedicalStudy to fetch.
     */
    where?: MedicalStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalStudies to fetch.
     */
    orderBy?: MedicalStudyOrderByWithRelationInput | MedicalStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalStudies.
     */
    cursor?: MedicalStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalStudies.
     */
    distinct?: MedicalStudyScalarFieldEnum | MedicalStudyScalarFieldEnum[]
  }

  /**
   * MedicalStudy findMany
   */
  export type MedicalStudyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * Filter, which MedicalStudies to fetch.
     */
    where?: MedicalStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalStudies to fetch.
     */
    orderBy?: MedicalStudyOrderByWithRelationInput | MedicalStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalStudies.
     */
    cursor?: MedicalStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalStudies.
     */
    skip?: number
    distinct?: MedicalStudyScalarFieldEnum | MedicalStudyScalarFieldEnum[]
  }

  /**
   * MedicalStudy create
   */
  export type MedicalStudyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalStudy.
     */
    data: XOR<MedicalStudyCreateInput, MedicalStudyUncheckedCreateInput>
  }

  /**
   * MedicalStudy createMany
   */
  export type MedicalStudyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalStudies.
     */
    data: MedicalStudyCreateManyInput | MedicalStudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalStudy createManyAndReturn
   */
  export type MedicalStudyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalStudies.
     */
    data: MedicalStudyCreateManyInput | MedicalStudyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalStudy update
   */
  export type MedicalStudyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalStudy.
     */
    data: XOR<MedicalStudyUpdateInput, MedicalStudyUncheckedUpdateInput>
    /**
     * Choose, which MedicalStudy to update.
     */
    where: MedicalStudyWhereUniqueInput
  }

  /**
   * MedicalStudy updateMany
   */
  export type MedicalStudyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalStudies.
     */
    data: XOR<MedicalStudyUpdateManyMutationInput, MedicalStudyUncheckedUpdateManyInput>
    /**
     * Filter which MedicalStudies to update
     */
    where?: MedicalStudyWhereInput
    /**
     * Limit how many MedicalStudies to update.
     */
    limit?: number
  }

  /**
   * MedicalStudy updateManyAndReturn
   */
  export type MedicalStudyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * The data used to update MedicalStudies.
     */
    data: XOR<MedicalStudyUpdateManyMutationInput, MedicalStudyUncheckedUpdateManyInput>
    /**
     * Filter which MedicalStudies to update
     */
    where?: MedicalStudyWhereInput
    /**
     * Limit how many MedicalStudies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalStudy upsert
   */
  export type MedicalStudyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalStudy to update in case it exists.
     */
    where: MedicalStudyWhereUniqueInput
    /**
     * In case the MedicalStudy found by the `where` argument doesn't exist, create a new MedicalStudy with this data.
     */
    create: XOR<MedicalStudyCreateInput, MedicalStudyUncheckedCreateInput>
    /**
     * In case the MedicalStudy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalStudyUpdateInput, MedicalStudyUncheckedUpdateInput>
  }

  /**
   * MedicalStudy delete
   */
  export type MedicalStudyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
    /**
     * Filter which MedicalStudy to delete.
     */
    where: MedicalStudyWhereUniqueInput
  }

  /**
   * MedicalStudy deleteMany
   */
  export type MedicalStudyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalStudies to delete
     */
    where?: MedicalStudyWhereInput
    /**
     * Limit how many MedicalStudies to delete.
     */
    limit?: number
  }

  /**
   * MedicalStudy without action
   */
  export type MedicalStudyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalStudy
     */
    select?: MedicalStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalStudy
     */
    omit?: MedicalStudyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalStudyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    officeAddress: 'officeAddress',
    city: 'city'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dni: 'dni',
    email: 'email',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    professionalId: 'professionalId'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const SpecialtyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SpecialtyScalarFieldEnum = (typeof SpecialtyScalarFieldEnum)[keyof typeof SpecialtyScalarFieldEnum]


  export const ClinicalHistoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    patientId: 'patientId'
  };

  export type ClinicalHistoryScalarFieldEnum = (typeof ClinicalHistoryScalarFieldEnum)[keyof typeof ClinicalHistoryScalarFieldEnum]


  export const VisitScalarFieldEnum: {
    id: 'id',
    visitDate: 'visitDate',
    reason: 'reason',
    epicrisis: 'epicrisis',
    diagnosis: 'diagnosis',
    treatment: 'treatment',
    clinicalHistoryId: 'clinicalHistoryId',
    professionalId: 'professionalId'
  };

  export type VisitScalarFieldEnum = (typeof VisitScalarFieldEnum)[keyof typeof VisitScalarFieldEnum]


  export const MedicalStudyScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    uploadedAt: 'uploadedAt',
    visitId: 'visitId'
  };

  export type MedicalStudyScalarFieldEnum = (typeof MedicalStudyScalarFieldEnum)[keyof typeof MedicalStudyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    officeAddress?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    patients?: PatientListRelationFilter
    visits?: VisitListRelationFilter
    specialties?: SpecialtyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    officeAddress?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    patients?: PatientOrderByRelationAggregateInput
    visits?: VisitOrderByRelationAggregateInput
    specialties?: SpecialtyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    officeAddress?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    patients?: PatientListRelationFilter
    visits?: VisitListRelationFilter
    specialties?: SpecialtyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    officeAddress?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    officeAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    name?: StringFilter<"Patient"> | string
    dni?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
    phone?: StringNullableFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    professionalId?: IntFilter<"Patient"> | number
    professional?: XOR<UserScalarRelationFilter, UserWhereInput>
    clinicalHistory?: XOR<ClinicalHistoryNullableScalarRelationFilter, ClinicalHistoryWhereInput> | null
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professionalId?: SortOrder
    professional?: UserOrderByWithRelationInput
    clinicalHistory?: ClinicalHistoryOrderByWithRelationInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: string
    email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    phone?: StringNullableFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    professionalId?: IntFilter<"Patient"> | number
    professional?: XOR<UserScalarRelationFilter, UserWhereInput>
    clinicalHistory?: XOR<ClinicalHistoryNullableScalarRelationFilter, ClinicalHistoryWhereInput> | null
  }, "id" | "dni" | "email">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professionalId?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    name?: StringWithAggregatesFilter<"Patient"> | string
    dni?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringWithAggregatesFilter<"Patient"> | string
    phone?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    professionalId?: IntWithAggregatesFilter<"Patient"> | number
  }

  export type SpecialtyWhereInput = {
    AND?: SpecialtyWhereInput | SpecialtyWhereInput[]
    OR?: SpecialtyWhereInput[]
    NOT?: SpecialtyWhereInput | SpecialtyWhereInput[]
    id?: IntFilter<"Specialty"> | number
    name?: StringFilter<"Specialty"> | string
    professionals?: UserListRelationFilter
  }

  export type SpecialtyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    professionals?: UserOrderByRelationAggregateInput
  }

  export type SpecialtyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SpecialtyWhereInput | SpecialtyWhereInput[]
    OR?: SpecialtyWhereInput[]
    NOT?: SpecialtyWhereInput | SpecialtyWhereInput[]
    professionals?: UserListRelationFilter
  }, "id" | "name">

  export type SpecialtyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SpecialtyCountOrderByAggregateInput
    _avg?: SpecialtyAvgOrderByAggregateInput
    _max?: SpecialtyMaxOrderByAggregateInput
    _min?: SpecialtyMinOrderByAggregateInput
    _sum?: SpecialtySumOrderByAggregateInput
  }

  export type SpecialtyScalarWhereWithAggregatesInput = {
    AND?: SpecialtyScalarWhereWithAggregatesInput | SpecialtyScalarWhereWithAggregatesInput[]
    OR?: SpecialtyScalarWhereWithAggregatesInput[]
    NOT?: SpecialtyScalarWhereWithAggregatesInput | SpecialtyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Specialty"> | number
    name?: StringWithAggregatesFilter<"Specialty"> | string
  }

  export type ClinicalHistoryWhereInput = {
    AND?: ClinicalHistoryWhereInput | ClinicalHistoryWhereInput[]
    OR?: ClinicalHistoryWhereInput[]
    NOT?: ClinicalHistoryWhereInput | ClinicalHistoryWhereInput[]
    id?: IntFilter<"ClinicalHistory"> | number
    createdAt?: DateTimeFilter<"ClinicalHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ClinicalHistory"> | Date | string
    patientId?: IntFilter<"ClinicalHistory"> | number
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    visits?: VisitListRelationFilter
  }

  export type ClinicalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
    patient?: PatientOrderByWithRelationInput
    visits?: VisitOrderByRelationAggregateInput
  }

  export type ClinicalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patientId?: number
    AND?: ClinicalHistoryWhereInput | ClinicalHistoryWhereInput[]
    OR?: ClinicalHistoryWhereInput[]
    NOT?: ClinicalHistoryWhereInput | ClinicalHistoryWhereInput[]
    createdAt?: DateTimeFilter<"ClinicalHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ClinicalHistory"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    visits?: VisitListRelationFilter
  }, "id" | "patientId">

  export type ClinicalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
    _count?: ClinicalHistoryCountOrderByAggregateInput
    _avg?: ClinicalHistoryAvgOrderByAggregateInput
    _max?: ClinicalHistoryMaxOrderByAggregateInput
    _min?: ClinicalHistoryMinOrderByAggregateInput
    _sum?: ClinicalHistorySumOrderByAggregateInput
  }

  export type ClinicalHistoryScalarWhereWithAggregatesInput = {
    AND?: ClinicalHistoryScalarWhereWithAggregatesInput | ClinicalHistoryScalarWhereWithAggregatesInput[]
    OR?: ClinicalHistoryScalarWhereWithAggregatesInput[]
    NOT?: ClinicalHistoryScalarWhereWithAggregatesInput | ClinicalHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClinicalHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ClinicalHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClinicalHistory"> | Date | string
    patientId?: IntWithAggregatesFilter<"ClinicalHistory"> | number
  }

  export type VisitWhereInput = {
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    id?: IntFilter<"Visit"> | number
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    reason?: StringFilter<"Visit"> | string
    epicrisis?: StringFilter<"Visit"> | string
    diagnosis?: StringFilter<"Visit"> | string
    treatment?: StringFilter<"Visit"> | string
    clinicalHistoryId?: IntFilter<"Visit"> | number
    professionalId?: IntFilter<"Visit"> | number
    clinicalHistory?: XOR<ClinicalHistoryScalarRelationFilter, ClinicalHistoryWhereInput>
    professional?: XOR<UserScalarRelationFilter, UserWhereInput>
    studies?: MedicalStudyListRelationFilter
  }

  export type VisitOrderByWithRelationInput = {
    id?: SortOrder
    visitDate?: SortOrder
    reason?: SortOrder
    epicrisis?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    clinicalHistoryId?: SortOrder
    professionalId?: SortOrder
    clinicalHistory?: ClinicalHistoryOrderByWithRelationInput
    professional?: UserOrderByWithRelationInput
    studies?: MedicalStudyOrderByRelationAggregateInput
  }

  export type VisitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    reason?: StringFilter<"Visit"> | string
    epicrisis?: StringFilter<"Visit"> | string
    diagnosis?: StringFilter<"Visit"> | string
    treatment?: StringFilter<"Visit"> | string
    clinicalHistoryId?: IntFilter<"Visit"> | number
    professionalId?: IntFilter<"Visit"> | number
    clinicalHistory?: XOR<ClinicalHistoryScalarRelationFilter, ClinicalHistoryWhereInput>
    professional?: XOR<UserScalarRelationFilter, UserWhereInput>
    studies?: MedicalStudyListRelationFilter
  }, "id">

  export type VisitOrderByWithAggregationInput = {
    id?: SortOrder
    visitDate?: SortOrder
    reason?: SortOrder
    epicrisis?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    clinicalHistoryId?: SortOrder
    professionalId?: SortOrder
    _count?: VisitCountOrderByAggregateInput
    _avg?: VisitAvgOrderByAggregateInput
    _max?: VisitMaxOrderByAggregateInput
    _min?: VisitMinOrderByAggregateInput
    _sum?: VisitSumOrderByAggregateInput
  }

  export type VisitScalarWhereWithAggregatesInput = {
    AND?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    OR?: VisitScalarWhereWithAggregatesInput[]
    NOT?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visit"> | number
    visitDate?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
    reason?: StringWithAggregatesFilter<"Visit"> | string
    epicrisis?: StringWithAggregatesFilter<"Visit"> | string
    diagnosis?: StringWithAggregatesFilter<"Visit"> | string
    treatment?: StringWithAggregatesFilter<"Visit"> | string
    clinicalHistoryId?: IntWithAggregatesFilter<"Visit"> | number
    professionalId?: IntWithAggregatesFilter<"Visit"> | number
  }

  export type MedicalStudyWhereInput = {
    AND?: MedicalStudyWhereInput | MedicalStudyWhereInput[]
    OR?: MedicalStudyWhereInput[]
    NOT?: MedicalStudyWhereInput | MedicalStudyWhereInput[]
    id?: IntFilter<"MedicalStudy"> | number
    fileName?: StringFilter<"MedicalStudy"> | string
    fileUrl?: StringFilter<"MedicalStudy"> | string
    fileType?: StringFilter<"MedicalStudy"> | string
    uploadedAt?: DateTimeFilter<"MedicalStudy"> | Date | string
    visitId?: IntFilter<"MedicalStudy"> | number
    visit?: XOR<VisitScalarRelationFilter, VisitWhereInput>
  }

  export type MedicalStudyOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    visitId?: SortOrder
    visit?: VisitOrderByWithRelationInput
  }

  export type MedicalStudyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicalStudyWhereInput | MedicalStudyWhereInput[]
    OR?: MedicalStudyWhereInput[]
    NOT?: MedicalStudyWhereInput | MedicalStudyWhereInput[]
    fileName?: StringFilter<"MedicalStudy"> | string
    fileUrl?: StringFilter<"MedicalStudy"> | string
    fileType?: StringFilter<"MedicalStudy"> | string
    uploadedAt?: DateTimeFilter<"MedicalStudy"> | Date | string
    visitId?: IntFilter<"MedicalStudy"> | number
    visit?: XOR<VisitScalarRelationFilter, VisitWhereInput>
  }, "id">

  export type MedicalStudyOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    visitId?: SortOrder
    _count?: MedicalStudyCountOrderByAggregateInput
    _avg?: MedicalStudyAvgOrderByAggregateInput
    _max?: MedicalStudyMaxOrderByAggregateInput
    _min?: MedicalStudyMinOrderByAggregateInput
    _sum?: MedicalStudySumOrderByAggregateInput
  }

  export type MedicalStudyScalarWhereWithAggregatesInput = {
    AND?: MedicalStudyScalarWhereWithAggregatesInput | MedicalStudyScalarWhereWithAggregatesInput[]
    OR?: MedicalStudyScalarWhereWithAggregatesInput[]
    NOT?: MedicalStudyScalarWhereWithAggregatesInput | MedicalStudyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalStudy"> | number
    fileName?: StringWithAggregatesFilter<"MedicalStudy"> | string
    fileUrl?: StringWithAggregatesFilter<"MedicalStudy"> | string
    fileType?: StringWithAggregatesFilter<"MedicalStudy"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"MedicalStudy"> | Date | string
    visitId?: IntWithAggregatesFilter<"MedicalStudy"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
    patients?: PatientCreateNestedManyWithoutProfessionalInput
    visits?: VisitCreateNestedManyWithoutProfessionalInput
    specialties?: SpecialtyCreateNestedManyWithoutProfessionalsInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
    patients?: PatientUncheckedCreateNestedManyWithoutProfessionalInput
    visits?: VisitUncheckedCreateNestedManyWithoutProfessionalInput
    specialties?: SpecialtyUncheckedCreateNestedManyWithoutProfessionalsInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: PatientUpdateManyWithoutProfessionalNestedInput
    visits?: VisitUpdateManyWithoutProfessionalNestedInput
    specialties?: SpecialtyUpdateManyWithoutProfessionalsNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: PatientUncheckedUpdateManyWithoutProfessionalNestedInput
    visits?: VisitUncheckedUpdateManyWithoutProfessionalNestedInput
    specialties?: SpecialtyUncheckedUpdateManyWithoutProfessionalsNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientCreateInput = {
    name: string
    dni: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: UserCreateNestedOneWithoutPatientsInput
    clinicalHistory?: ClinicalHistoryCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    name: string
    dni: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalId: number
    clinicalHistory?: ClinicalHistoryUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: UserUpdateOneRequiredWithoutPatientsNestedInput
    clinicalHistory?: ClinicalHistoryUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalId?: IntFieldUpdateOperationsInput | number
    clinicalHistory?: ClinicalHistoryUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    name: string
    dni: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalId: number
  }

  export type PatientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalId?: IntFieldUpdateOperationsInput | number
  }

  export type SpecialtyCreateInput = {
    name: string
    professionals?: UserCreateNestedManyWithoutSpecialtiesInput
  }

  export type SpecialtyUncheckedCreateInput = {
    id?: number
    name: string
    professionals?: UserUncheckedCreateNestedManyWithoutSpecialtiesInput
  }

  export type SpecialtyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    professionals?: UserUpdateManyWithoutSpecialtiesNestedInput
  }

  export type SpecialtyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    professionals?: UserUncheckedUpdateManyWithoutSpecialtiesNestedInput
  }

  export type SpecialtyCreateManyInput = {
    id?: number
    name: string
  }

  export type SpecialtyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClinicalHistoryCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutClinicalHistoryInput
    visits?: VisitCreateNestedManyWithoutClinicalHistoryInput
  }

  export type ClinicalHistoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: number
    visits?: VisitUncheckedCreateNestedManyWithoutClinicalHistoryInput
  }

  export type ClinicalHistoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutClinicalHistoryNestedInput
    visits?: VisitUpdateManyWithoutClinicalHistoryNestedInput
  }

  export type ClinicalHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: IntFieldUpdateOperationsInput | number
    visits?: VisitUncheckedUpdateManyWithoutClinicalHistoryNestedInput
  }

  export type ClinicalHistoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: number
  }

  export type ClinicalHistoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicalHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitCreateInput = {
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistory: ClinicalHistoryCreateNestedOneWithoutVisitsInput
    professional: UserCreateNestedOneWithoutVisitsInput
    studies?: MedicalStudyCreateNestedManyWithoutVisitInput
  }

  export type VisitUncheckedCreateInput = {
    id?: number
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistoryId: number
    professionalId: number
    studies?: MedicalStudyUncheckedCreateNestedManyWithoutVisitInput
  }

  export type VisitUpdateInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    clinicalHistory?: ClinicalHistoryUpdateOneRequiredWithoutVisitsNestedInput
    professional?: UserUpdateOneRequiredWithoutVisitsNestedInput
    studies?: MedicalStudyUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    clinicalHistoryId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    studies?: MedicalStudyUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type VisitCreateManyInput = {
    id?: number
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistoryId: number
    professionalId: number
  }

  export type VisitUpdateManyMutationInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
  }

  export type VisitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    clinicalHistoryId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
  }

  export type MedicalStudyCreateInput = {
    fileName: string
    fileUrl: string
    fileType: string
    uploadedAt?: Date | string
    visit: VisitCreateNestedOneWithoutStudiesInput
  }

  export type MedicalStudyUncheckedCreateInput = {
    id?: number
    fileName: string
    fileUrl: string
    fileType: string
    uploadedAt?: Date | string
    visitId: number
  }

  export type MedicalStudyUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visit?: VisitUpdateOneRequiredWithoutStudiesNestedInput
  }

  export type MedicalStudyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitId?: IntFieldUpdateOperationsInput | number
  }

  export type MedicalStudyCreateManyInput = {
    id?: number
    fileName: string
    fileUrl: string
    fileType: string
    uploadedAt?: Date | string
    visitId: number
  }

  export type MedicalStudyUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalStudyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type VisitListRelationFilter = {
    every?: VisitWhereInput
    some?: VisitWhereInput
    none?: VisitWhereInput
  }

  export type SpecialtyListRelationFilter = {
    every?: SpecialtyWhereInput
    some?: SpecialtyWhereInput
    none?: SpecialtyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialtyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    officeAddress?: SortOrder
    city?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    officeAddress?: SortOrder
    city?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    officeAddress?: SortOrder
    city?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClinicalHistoryNullableScalarRelationFilter = {
    is?: ClinicalHistoryWhereInput | null
    isNot?: ClinicalHistoryWhereInput | null
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professionalId?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professionalId?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dni?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professionalId?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialtyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialtyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialtyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialtyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialtySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type ClinicalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
  }

  export type ClinicalHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type ClinicalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
  }

  export type ClinicalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientId?: SortOrder
  }

  export type ClinicalHistorySumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type ClinicalHistoryScalarRelationFilter = {
    is?: ClinicalHistoryWhereInput
    isNot?: ClinicalHistoryWhereInput
  }

  export type MedicalStudyListRelationFilter = {
    every?: MedicalStudyWhereInput
    some?: MedicalStudyWhereInput
    none?: MedicalStudyWhereInput
  }

  export type MedicalStudyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitCountOrderByAggregateInput = {
    id?: SortOrder
    visitDate?: SortOrder
    reason?: SortOrder
    epicrisis?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    clinicalHistoryId?: SortOrder
    professionalId?: SortOrder
  }

  export type VisitAvgOrderByAggregateInput = {
    id?: SortOrder
    clinicalHistoryId?: SortOrder
    professionalId?: SortOrder
  }

  export type VisitMaxOrderByAggregateInput = {
    id?: SortOrder
    visitDate?: SortOrder
    reason?: SortOrder
    epicrisis?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    clinicalHistoryId?: SortOrder
    professionalId?: SortOrder
  }

  export type VisitMinOrderByAggregateInput = {
    id?: SortOrder
    visitDate?: SortOrder
    reason?: SortOrder
    epicrisis?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    clinicalHistoryId?: SortOrder
    professionalId?: SortOrder
  }

  export type VisitSumOrderByAggregateInput = {
    id?: SortOrder
    clinicalHistoryId?: SortOrder
    professionalId?: SortOrder
  }

  export type VisitScalarRelationFilter = {
    is?: VisitWhereInput
    isNot?: VisitWhereInput
  }

  export type MedicalStudyCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    visitId?: SortOrder
  }

  export type MedicalStudyAvgOrderByAggregateInput = {
    id?: SortOrder
    visitId?: SortOrder
  }

  export type MedicalStudyMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    visitId?: SortOrder
  }

  export type MedicalStudyMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    visitId?: SortOrder
  }

  export type MedicalStudySumOrderByAggregateInput = {
    id?: SortOrder
    visitId?: SortOrder
  }

  export type PatientCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<PatientCreateWithoutProfessionalInput, PatientUncheckedCreateWithoutProfessionalInput> | PatientCreateWithoutProfessionalInput[] | PatientUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutProfessionalInput | PatientCreateOrConnectWithoutProfessionalInput[]
    createMany?: PatientCreateManyProfessionalInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type VisitCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<VisitCreateWithoutProfessionalInput, VisitUncheckedCreateWithoutProfessionalInput> | VisitCreateWithoutProfessionalInput[] | VisitUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutProfessionalInput | VisitCreateOrConnectWithoutProfessionalInput[]
    createMany?: VisitCreateManyProfessionalInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type SpecialtyCreateNestedManyWithoutProfessionalsInput = {
    create?: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput> | SpecialtyCreateWithoutProfessionalsInput[] | SpecialtyUncheckedCreateWithoutProfessionalsInput[]
    connectOrCreate?: SpecialtyCreateOrConnectWithoutProfessionalsInput | SpecialtyCreateOrConnectWithoutProfessionalsInput[]
    connect?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<PatientCreateWithoutProfessionalInput, PatientUncheckedCreateWithoutProfessionalInput> | PatientCreateWithoutProfessionalInput[] | PatientUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutProfessionalInput | PatientCreateOrConnectWithoutProfessionalInput[]
    createMany?: PatientCreateManyProfessionalInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type VisitUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<VisitCreateWithoutProfessionalInput, VisitUncheckedCreateWithoutProfessionalInput> | VisitCreateWithoutProfessionalInput[] | VisitUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutProfessionalInput | VisitCreateOrConnectWithoutProfessionalInput[]
    createMany?: VisitCreateManyProfessionalInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type SpecialtyUncheckedCreateNestedManyWithoutProfessionalsInput = {
    create?: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput> | SpecialtyCreateWithoutProfessionalsInput[] | SpecialtyUncheckedCreateWithoutProfessionalsInput[]
    connectOrCreate?: SpecialtyCreateOrConnectWithoutProfessionalsInput | SpecialtyCreateOrConnectWithoutProfessionalsInput[]
    connect?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PatientUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<PatientCreateWithoutProfessionalInput, PatientUncheckedCreateWithoutProfessionalInput> | PatientCreateWithoutProfessionalInput[] | PatientUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutProfessionalInput | PatientCreateOrConnectWithoutProfessionalInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutProfessionalInput | PatientUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: PatientCreateManyProfessionalInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutProfessionalInput | PatientUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutProfessionalInput | PatientUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type VisitUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<VisitCreateWithoutProfessionalInput, VisitUncheckedCreateWithoutProfessionalInput> | VisitCreateWithoutProfessionalInput[] | VisitUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutProfessionalInput | VisitCreateOrConnectWithoutProfessionalInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutProfessionalInput | VisitUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: VisitCreateManyProfessionalInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutProfessionalInput | VisitUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutProfessionalInput | VisitUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type SpecialtyUpdateManyWithoutProfessionalsNestedInput = {
    create?: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput> | SpecialtyCreateWithoutProfessionalsInput[] | SpecialtyUncheckedCreateWithoutProfessionalsInput[]
    connectOrCreate?: SpecialtyCreateOrConnectWithoutProfessionalsInput | SpecialtyCreateOrConnectWithoutProfessionalsInput[]
    upsert?: SpecialtyUpsertWithWhereUniqueWithoutProfessionalsInput | SpecialtyUpsertWithWhereUniqueWithoutProfessionalsInput[]
    set?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
    disconnect?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
    delete?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
    connect?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
    update?: SpecialtyUpdateWithWhereUniqueWithoutProfessionalsInput | SpecialtyUpdateWithWhereUniqueWithoutProfessionalsInput[]
    updateMany?: SpecialtyUpdateManyWithWhereWithoutProfessionalsInput | SpecialtyUpdateManyWithWhereWithoutProfessionalsInput[]
    deleteMany?: SpecialtyScalarWhereInput | SpecialtyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<PatientCreateWithoutProfessionalInput, PatientUncheckedCreateWithoutProfessionalInput> | PatientCreateWithoutProfessionalInput[] | PatientUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutProfessionalInput | PatientCreateOrConnectWithoutProfessionalInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutProfessionalInput | PatientUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: PatientCreateManyProfessionalInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutProfessionalInput | PatientUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutProfessionalInput | PatientUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type VisitUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<VisitCreateWithoutProfessionalInput, VisitUncheckedCreateWithoutProfessionalInput> | VisitCreateWithoutProfessionalInput[] | VisitUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutProfessionalInput | VisitCreateOrConnectWithoutProfessionalInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutProfessionalInput | VisitUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: VisitCreateManyProfessionalInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutProfessionalInput | VisitUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutProfessionalInput | VisitUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type SpecialtyUncheckedUpdateManyWithoutProfessionalsNestedInput = {
    create?: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput> | SpecialtyCreateWithoutProfessionalsInput[] | SpecialtyUncheckedCreateWithoutProfessionalsInput[]
    connectOrCreate?: SpecialtyCreateOrConnectWithoutProfessionalsInput | SpecialtyCreateOrConnectWithoutProfessionalsInput[]
    upsert?: SpecialtyUpsertWithWhereUniqueWithoutProfessionalsInput | SpecialtyUpsertWithWhereUniqueWithoutProfessionalsInput[]
    set?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
    disconnect?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
    delete?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
    connect?: SpecialtyWhereUniqueInput | SpecialtyWhereUniqueInput[]
    update?: SpecialtyUpdateWithWhereUniqueWithoutProfessionalsInput | SpecialtyUpdateWithWhereUniqueWithoutProfessionalsInput[]
    updateMany?: SpecialtyUpdateManyWithWhereWithoutProfessionalsInput | SpecialtyUpdateManyWithWhereWithoutProfessionalsInput[]
    deleteMany?: SpecialtyScalarWhereInput | SpecialtyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientsInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type ClinicalHistoryCreateNestedOneWithoutPatientInput = {
    create?: XOR<ClinicalHistoryCreateWithoutPatientInput, ClinicalHistoryUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ClinicalHistoryCreateOrConnectWithoutPatientInput
    connect?: ClinicalHistoryWhereUniqueInput
  }

  export type ClinicalHistoryUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<ClinicalHistoryCreateWithoutPatientInput, ClinicalHistoryUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ClinicalHistoryCreateOrConnectWithoutPatientInput
    connect?: ClinicalHistoryWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    upsert?: UserUpsertWithoutPatientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientsInput, UserUpdateWithoutPatientsInput>, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type ClinicalHistoryUpdateOneWithoutPatientNestedInput = {
    create?: XOR<ClinicalHistoryCreateWithoutPatientInput, ClinicalHistoryUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ClinicalHistoryCreateOrConnectWithoutPatientInput
    upsert?: ClinicalHistoryUpsertWithoutPatientInput
    disconnect?: ClinicalHistoryWhereInput | boolean
    delete?: ClinicalHistoryWhereInput | boolean
    connect?: ClinicalHistoryWhereUniqueInput
    update?: XOR<XOR<ClinicalHistoryUpdateToOneWithWhereWithoutPatientInput, ClinicalHistoryUpdateWithoutPatientInput>, ClinicalHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type ClinicalHistoryUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<ClinicalHistoryCreateWithoutPatientInput, ClinicalHistoryUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ClinicalHistoryCreateOrConnectWithoutPatientInput
    upsert?: ClinicalHistoryUpsertWithoutPatientInput
    disconnect?: ClinicalHistoryWhereInput | boolean
    delete?: ClinicalHistoryWhereInput | boolean
    connect?: ClinicalHistoryWhereUniqueInput
    update?: XOR<XOR<ClinicalHistoryUpdateToOneWithWhereWithoutPatientInput, ClinicalHistoryUpdateWithoutPatientInput>, ClinicalHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type UserCreateNestedManyWithoutSpecialtiesInput = {
    create?: XOR<UserCreateWithoutSpecialtiesInput, UserUncheckedCreateWithoutSpecialtiesInput> | UserCreateWithoutSpecialtiesInput[] | UserUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialtiesInput | UserCreateOrConnectWithoutSpecialtiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSpecialtiesInput = {
    create?: XOR<UserCreateWithoutSpecialtiesInput, UserUncheckedCreateWithoutSpecialtiesInput> | UserCreateWithoutSpecialtiesInput[] | UserUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialtiesInput | UserCreateOrConnectWithoutSpecialtiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutSpecialtiesNestedInput = {
    create?: XOR<UserCreateWithoutSpecialtiesInput, UserUncheckedCreateWithoutSpecialtiesInput> | UserCreateWithoutSpecialtiesInput[] | UserUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialtiesInput | UserCreateOrConnectWithoutSpecialtiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSpecialtiesInput | UserUpsertWithWhereUniqueWithoutSpecialtiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSpecialtiesInput | UserUpdateWithWhereUniqueWithoutSpecialtiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSpecialtiesInput | UserUpdateManyWithWhereWithoutSpecialtiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSpecialtiesNestedInput = {
    create?: XOR<UserCreateWithoutSpecialtiesInput, UserUncheckedCreateWithoutSpecialtiesInput> | UserCreateWithoutSpecialtiesInput[] | UserUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialtiesInput | UserCreateOrConnectWithoutSpecialtiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSpecialtiesInput | UserUpsertWithWhereUniqueWithoutSpecialtiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSpecialtiesInput | UserUpdateWithWhereUniqueWithoutSpecialtiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSpecialtiesInput | UserUpdateManyWithWhereWithoutSpecialtiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutClinicalHistoryInput = {
    create?: XOR<PatientCreateWithoutClinicalHistoryInput, PatientUncheckedCreateWithoutClinicalHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutClinicalHistoryInput
    connect?: PatientWhereUniqueInput
  }

  export type VisitCreateNestedManyWithoutClinicalHistoryInput = {
    create?: XOR<VisitCreateWithoutClinicalHistoryInput, VisitUncheckedCreateWithoutClinicalHistoryInput> | VisitCreateWithoutClinicalHistoryInput[] | VisitUncheckedCreateWithoutClinicalHistoryInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutClinicalHistoryInput | VisitCreateOrConnectWithoutClinicalHistoryInput[]
    createMany?: VisitCreateManyClinicalHistoryInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type VisitUncheckedCreateNestedManyWithoutClinicalHistoryInput = {
    create?: XOR<VisitCreateWithoutClinicalHistoryInput, VisitUncheckedCreateWithoutClinicalHistoryInput> | VisitCreateWithoutClinicalHistoryInput[] | VisitUncheckedCreateWithoutClinicalHistoryInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutClinicalHistoryInput | VisitCreateOrConnectWithoutClinicalHistoryInput[]
    createMany?: VisitCreateManyClinicalHistoryInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutClinicalHistoryNestedInput = {
    create?: XOR<PatientCreateWithoutClinicalHistoryInput, PatientUncheckedCreateWithoutClinicalHistoryInput>
    connectOrCreate?: PatientCreateOrConnectWithoutClinicalHistoryInput
    upsert?: PatientUpsertWithoutClinicalHistoryInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutClinicalHistoryInput, PatientUpdateWithoutClinicalHistoryInput>, PatientUncheckedUpdateWithoutClinicalHistoryInput>
  }

  export type VisitUpdateManyWithoutClinicalHistoryNestedInput = {
    create?: XOR<VisitCreateWithoutClinicalHistoryInput, VisitUncheckedCreateWithoutClinicalHistoryInput> | VisitCreateWithoutClinicalHistoryInput[] | VisitUncheckedCreateWithoutClinicalHistoryInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutClinicalHistoryInput | VisitCreateOrConnectWithoutClinicalHistoryInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutClinicalHistoryInput | VisitUpsertWithWhereUniqueWithoutClinicalHistoryInput[]
    createMany?: VisitCreateManyClinicalHistoryInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutClinicalHistoryInput | VisitUpdateWithWhereUniqueWithoutClinicalHistoryInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutClinicalHistoryInput | VisitUpdateManyWithWhereWithoutClinicalHistoryInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type VisitUncheckedUpdateManyWithoutClinicalHistoryNestedInput = {
    create?: XOR<VisitCreateWithoutClinicalHistoryInput, VisitUncheckedCreateWithoutClinicalHistoryInput> | VisitCreateWithoutClinicalHistoryInput[] | VisitUncheckedCreateWithoutClinicalHistoryInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutClinicalHistoryInput | VisitCreateOrConnectWithoutClinicalHistoryInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutClinicalHistoryInput | VisitUpsertWithWhereUniqueWithoutClinicalHistoryInput[]
    createMany?: VisitCreateManyClinicalHistoryInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutClinicalHistoryInput | VisitUpdateWithWhereUniqueWithoutClinicalHistoryInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutClinicalHistoryInput | VisitUpdateManyWithWhereWithoutClinicalHistoryInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type ClinicalHistoryCreateNestedOneWithoutVisitsInput = {
    create?: XOR<ClinicalHistoryCreateWithoutVisitsInput, ClinicalHistoryUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: ClinicalHistoryCreateOrConnectWithoutVisitsInput
    connect?: ClinicalHistoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVisitsInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type MedicalStudyCreateNestedManyWithoutVisitInput = {
    create?: XOR<MedicalStudyCreateWithoutVisitInput, MedicalStudyUncheckedCreateWithoutVisitInput> | MedicalStudyCreateWithoutVisitInput[] | MedicalStudyUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: MedicalStudyCreateOrConnectWithoutVisitInput | MedicalStudyCreateOrConnectWithoutVisitInput[]
    createMany?: MedicalStudyCreateManyVisitInputEnvelope
    connect?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
  }

  export type MedicalStudyUncheckedCreateNestedManyWithoutVisitInput = {
    create?: XOR<MedicalStudyCreateWithoutVisitInput, MedicalStudyUncheckedCreateWithoutVisitInput> | MedicalStudyCreateWithoutVisitInput[] | MedicalStudyUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: MedicalStudyCreateOrConnectWithoutVisitInput | MedicalStudyCreateOrConnectWithoutVisitInput[]
    createMany?: MedicalStudyCreateManyVisitInputEnvelope
    connect?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
  }

  export type ClinicalHistoryUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<ClinicalHistoryCreateWithoutVisitsInput, ClinicalHistoryUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: ClinicalHistoryCreateOrConnectWithoutVisitsInput
    upsert?: ClinicalHistoryUpsertWithoutVisitsInput
    connect?: ClinicalHistoryWhereUniqueInput
    update?: XOR<XOR<ClinicalHistoryUpdateToOneWithWhereWithoutVisitsInput, ClinicalHistoryUpdateWithoutVisitsInput>, ClinicalHistoryUncheckedUpdateWithoutVisitsInput>
  }

  export type UserUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    upsert?: UserUpsertWithoutVisitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisitsInput, UserUpdateWithoutVisitsInput>, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type MedicalStudyUpdateManyWithoutVisitNestedInput = {
    create?: XOR<MedicalStudyCreateWithoutVisitInput, MedicalStudyUncheckedCreateWithoutVisitInput> | MedicalStudyCreateWithoutVisitInput[] | MedicalStudyUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: MedicalStudyCreateOrConnectWithoutVisitInput | MedicalStudyCreateOrConnectWithoutVisitInput[]
    upsert?: MedicalStudyUpsertWithWhereUniqueWithoutVisitInput | MedicalStudyUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: MedicalStudyCreateManyVisitInputEnvelope
    set?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
    disconnect?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
    delete?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
    connect?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
    update?: MedicalStudyUpdateWithWhereUniqueWithoutVisitInput | MedicalStudyUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: MedicalStudyUpdateManyWithWhereWithoutVisitInput | MedicalStudyUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: MedicalStudyScalarWhereInput | MedicalStudyScalarWhereInput[]
  }

  export type MedicalStudyUncheckedUpdateManyWithoutVisitNestedInput = {
    create?: XOR<MedicalStudyCreateWithoutVisitInput, MedicalStudyUncheckedCreateWithoutVisitInput> | MedicalStudyCreateWithoutVisitInput[] | MedicalStudyUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: MedicalStudyCreateOrConnectWithoutVisitInput | MedicalStudyCreateOrConnectWithoutVisitInput[]
    upsert?: MedicalStudyUpsertWithWhereUniqueWithoutVisitInput | MedicalStudyUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: MedicalStudyCreateManyVisitInputEnvelope
    set?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
    disconnect?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
    delete?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
    connect?: MedicalStudyWhereUniqueInput | MedicalStudyWhereUniqueInput[]
    update?: MedicalStudyUpdateWithWhereUniqueWithoutVisitInput | MedicalStudyUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: MedicalStudyUpdateManyWithWhereWithoutVisitInput | MedicalStudyUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: MedicalStudyScalarWhereInput | MedicalStudyScalarWhereInput[]
  }

  export type VisitCreateNestedOneWithoutStudiesInput = {
    create?: XOR<VisitCreateWithoutStudiesInput, VisitUncheckedCreateWithoutStudiesInput>
    connectOrCreate?: VisitCreateOrConnectWithoutStudiesInput
    connect?: VisitWhereUniqueInput
  }

  export type VisitUpdateOneRequiredWithoutStudiesNestedInput = {
    create?: XOR<VisitCreateWithoutStudiesInput, VisitUncheckedCreateWithoutStudiesInput>
    connectOrCreate?: VisitCreateOrConnectWithoutStudiesInput
    upsert?: VisitUpsertWithoutStudiesInput
    connect?: VisitWhereUniqueInput
    update?: XOR<XOR<VisitUpdateToOneWithWhereWithoutStudiesInput, VisitUpdateWithoutStudiesInput>, VisitUncheckedUpdateWithoutStudiesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PatientCreateWithoutProfessionalInput = {
    name: string
    dni: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinicalHistory?: ClinicalHistoryCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutProfessionalInput = {
    id?: number
    name: string
    dni: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinicalHistory?: ClinicalHistoryUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutProfessionalInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutProfessionalInput, PatientUncheckedCreateWithoutProfessionalInput>
  }

  export type PatientCreateManyProfessionalInputEnvelope = {
    data: PatientCreateManyProfessionalInput | PatientCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type VisitCreateWithoutProfessionalInput = {
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistory: ClinicalHistoryCreateNestedOneWithoutVisitsInput
    studies?: MedicalStudyCreateNestedManyWithoutVisitInput
  }

  export type VisitUncheckedCreateWithoutProfessionalInput = {
    id?: number
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistoryId: number
    studies?: MedicalStudyUncheckedCreateNestedManyWithoutVisitInput
  }

  export type VisitCreateOrConnectWithoutProfessionalInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutProfessionalInput, VisitUncheckedCreateWithoutProfessionalInput>
  }

  export type VisitCreateManyProfessionalInputEnvelope = {
    data: VisitCreateManyProfessionalInput | VisitCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type SpecialtyCreateWithoutProfessionalsInput = {
    name: string
  }

  export type SpecialtyUncheckedCreateWithoutProfessionalsInput = {
    id?: number
    name: string
  }

  export type SpecialtyCreateOrConnectWithoutProfessionalsInput = {
    where: SpecialtyWhereUniqueInput
    create: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput>
  }

  export type PatientUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutProfessionalInput, PatientUncheckedUpdateWithoutProfessionalInput>
    create: XOR<PatientCreateWithoutProfessionalInput, PatientUncheckedCreateWithoutProfessionalInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutProfessionalInput, PatientUncheckedUpdateWithoutProfessionalInput>
  }

  export type PatientUpdateManyWithWhereWithoutProfessionalInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: IntFilter<"Patient"> | number
    name?: StringFilter<"Patient"> | string
    dni?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
    phone?: StringNullableFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    professionalId?: IntFilter<"Patient"> | number
  }

  export type VisitUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: VisitWhereUniqueInput
    update: XOR<VisitUpdateWithoutProfessionalInput, VisitUncheckedUpdateWithoutProfessionalInput>
    create: XOR<VisitCreateWithoutProfessionalInput, VisitUncheckedCreateWithoutProfessionalInput>
  }

  export type VisitUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: VisitWhereUniqueInput
    data: XOR<VisitUpdateWithoutProfessionalInput, VisitUncheckedUpdateWithoutProfessionalInput>
  }

  export type VisitUpdateManyWithWhereWithoutProfessionalInput = {
    where: VisitScalarWhereInput
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type VisitScalarWhereInput = {
    AND?: VisitScalarWhereInput | VisitScalarWhereInput[]
    OR?: VisitScalarWhereInput[]
    NOT?: VisitScalarWhereInput | VisitScalarWhereInput[]
    id?: IntFilter<"Visit"> | number
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    reason?: StringFilter<"Visit"> | string
    epicrisis?: StringFilter<"Visit"> | string
    diagnosis?: StringFilter<"Visit"> | string
    treatment?: StringFilter<"Visit"> | string
    clinicalHistoryId?: IntFilter<"Visit"> | number
    professionalId?: IntFilter<"Visit"> | number
  }

  export type SpecialtyUpsertWithWhereUniqueWithoutProfessionalsInput = {
    where: SpecialtyWhereUniqueInput
    update: XOR<SpecialtyUpdateWithoutProfessionalsInput, SpecialtyUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<SpecialtyCreateWithoutProfessionalsInput, SpecialtyUncheckedCreateWithoutProfessionalsInput>
  }

  export type SpecialtyUpdateWithWhereUniqueWithoutProfessionalsInput = {
    where: SpecialtyWhereUniqueInput
    data: XOR<SpecialtyUpdateWithoutProfessionalsInput, SpecialtyUncheckedUpdateWithoutProfessionalsInput>
  }

  export type SpecialtyUpdateManyWithWhereWithoutProfessionalsInput = {
    where: SpecialtyScalarWhereInput
    data: XOR<SpecialtyUpdateManyMutationInput, SpecialtyUncheckedUpdateManyWithoutProfessionalsInput>
  }

  export type SpecialtyScalarWhereInput = {
    AND?: SpecialtyScalarWhereInput | SpecialtyScalarWhereInput[]
    OR?: SpecialtyScalarWhereInput[]
    NOT?: SpecialtyScalarWhereInput | SpecialtyScalarWhereInput[]
    id?: IntFilter<"Specialty"> | number
    name?: StringFilter<"Specialty"> | string
  }

  export type UserCreateWithoutPatientsInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
    visits?: VisitCreateNestedManyWithoutProfessionalInput
    specialties?: SpecialtyCreateNestedManyWithoutProfessionalsInput
  }

  export type UserUncheckedCreateWithoutPatientsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
    visits?: VisitUncheckedCreateNestedManyWithoutProfessionalInput
    specialties?: SpecialtyUncheckedCreateNestedManyWithoutProfessionalsInput
  }

  export type UserCreateOrConnectWithoutPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
  }

  export type ClinicalHistoryCreateWithoutPatientInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: VisitCreateNestedManyWithoutClinicalHistoryInput
  }

  export type ClinicalHistoryUncheckedCreateWithoutPatientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: VisitUncheckedCreateNestedManyWithoutClinicalHistoryInput
  }

  export type ClinicalHistoryCreateOrConnectWithoutPatientInput = {
    where: ClinicalHistoryWhereUniqueInput
    create: XOR<ClinicalHistoryCreateWithoutPatientInput, ClinicalHistoryUncheckedCreateWithoutPatientInput>
  }

  export type UserUpsertWithoutPatientsInput = {
    update: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateWithoutPatientsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    visits?: VisitUpdateManyWithoutProfessionalNestedInput
    specialties?: SpecialtyUpdateManyWithoutProfessionalsNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    visits?: VisitUncheckedUpdateManyWithoutProfessionalNestedInput
    specialties?: SpecialtyUncheckedUpdateManyWithoutProfessionalsNestedInput
  }

  export type ClinicalHistoryUpsertWithoutPatientInput = {
    update: XOR<ClinicalHistoryUpdateWithoutPatientInput, ClinicalHistoryUncheckedUpdateWithoutPatientInput>
    create: XOR<ClinicalHistoryCreateWithoutPatientInput, ClinicalHistoryUncheckedCreateWithoutPatientInput>
    where?: ClinicalHistoryWhereInput
  }

  export type ClinicalHistoryUpdateToOneWithWhereWithoutPatientInput = {
    where?: ClinicalHistoryWhereInput
    data: XOR<ClinicalHistoryUpdateWithoutPatientInput, ClinicalHistoryUncheckedUpdateWithoutPatientInput>
  }

  export type ClinicalHistoryUpdateWithoutPatientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitUpdateManyWithoutClinicalHistoryNestedInput
  }

  export type ClinicalHistoryUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitUncheckedUpdateManyWithoutClinicalHistoryNestedInput
  }

  export type UserCreateWithoutSpecialtiesInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
    patients?: PatientCreateNestedManyWithoutProfessionalInput
    visits?: VisitCreateNestedManyWithoutProfessionalInput
  }

  export type UserUncheckedCreateWithoutSpecialtiesInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
    patients?: PatientUncheckedCreateNestedManyWithoutProfessionalInput
    visits?: VisitUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type UserCreateOrConnectWithoutSpecialtiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpecialtiesInput, UserUncheckedCreateWithoutSpecialtiesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSpecialtiesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSpecialtiesInput, UserUncheckedUpdateWithoutSpecialtiesInput>
    create: XOR<UserCreateWithoutSpecialtiesInput, UserUncheckedCreateWithoutSpecialtiesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSpecialtiesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSpecialtiesInput, UserUncheckedUpdateWithoutSpecialtiesInput>
  }

  export type UserUpdateManyWithWhereWithoutSpecialtiesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSpecialtiesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    officeAddress?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
  }

  export type PatientCreateWithoutClinicalHistoryInput = {
    name: string
    dni: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: UserCreateNestedOneWithoutPatientsInput
  }

  export type PatientUncheckedCreateWithoutClinicalHistoryInput = {
    id?: number
    name: string
    dni: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professionalId: number
  }

  export type PatientCreateOrConnectWithoutClinicalHistoryInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutClinicalHistoryInput, PatientUncheckedCreateWithoutClinicalHistoryInput>
  }

  export type VisitCreateWithoutClinicalHistoryInput = {
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    professional: UserCreateNestedOneWithoutVisitsInput
    studies?: MedicalStudyCreateNestedManyWithoutVisitInput
  }

  export type VisitUncheckedCreateWithoutClinicalHistoryInput = {
    id?: number
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    professionalId: number
    studies?: MedicalStudyUncheckedCreateNestedManyWithoutVisitInput
  }

  export type VisitCreateOrConnectWithoutClinicalHistoryInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutClinicalHistoryInput, VisitUncheckedCreateWithoutClinicalHistoryInput>
  }

  export type VisitCreateManyClinicalHistoryInputEnvelope = {
    data: VisitCreateManyClinicalHistoryInput | VisitCreateManyClinicalHistoryInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutClinicalHistoryInput = {
    update: XOR<PatientUpdateWithoutClinicalHistoryInput, PatientUncheckedUpdateWithoutClinicalHistoryInput>
    create: XOR<PatientCreateWithoutClinicalHistoryInput, PatientUncheckedCreateWithoutClinicalHistoryInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutClinicalHistoryInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutClinicalHistoryInput, PatientUncheckedUpdateWithoutClinicalHistoryInput>
  }

  export type PatientUpdateWithoutClinicalHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: UserUpdateOneRequiredWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateWithoutClinicalHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionalId?: IntFieldUpdateOperationsInput | number
  }

  export type VisitUpsertWithWhereUniqueWithoutClinicalHistoryInput = {
    where: VisitWhereUniqueInput
    update: XOR<VisitUpdateWithoutClinicalHistoryInput, VisitUncheckedUpdateWithoutClinicalHistoryInput>
    create: XOR<VisitCreateWithoutClinicalHistoryInput, VisitUncheckedCreateWithoutClinicalHistoryInput>
  }

  export type VisitUpdateWithWhereUniqueWithoutClinicalHistoryInput = {
    where: VisitWhereUniqueInput
    data: XOR<VisitUpdateWithoutClinicalHistoryInput, VisitUncheckedUpdateWithoutClinicalHistoryInput>
  }

  export type VisitUpdateManyWithWhereWithoutClinicalHistoryInput = {
    where: VisitScalarWhereInput
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutClinicalHistoryInput>
  }

  export type ClinicalHistoryCreateWithoutVisitsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutClinicalHistoryInput
  }

  export type ClinicalHistoryUncheckedCreateWithoutVisitsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: number
  }

  export type ClinicalHistoryCreateOrConnectWithoutVisitsInput = {
    where: ClinicalHistoryWhereUniqueInput
    create: XOR<ClinicalHistoryCreateWithoutVisitsInput, ClinicalHistoryUncheckedCreateWithoutVisitsInput>
  }

  export type UserCreateWithoutVisitsInput = {
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
    patients?: PatientCreateNestedManyWithoutProfessionalInput
    specialties?: SpecialtyCreateNestedManyWithoutProfessionalsInput
  }

  export type UserUncheckedCreateWithoutVisitsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    officeAddress?: string | null
    city?: string | null
    patients?: PatientUncheckedCreateNestedManyWithoutProfessionalInput
    specialties?: SpecialtyUncheckedCreateNestedManyWithoutProfessionalsInput
  }

  export type UserCreateOrConnectWithoutVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
  }

  export type MedicalStudyCreateWithoutVisitInput = {
    fileName: string
    fileUrl: string
    fileType: string
    uploadedAt?: Date | string
  }

  export type MedicalStudyUncheckedCreateWithoutVisitInput = {
    id?: number
    fileName: string
    fileUrl: string
    fileType: string
    uploadedAt?: Date | string
  }

  export type MedicalStudyCreateOrConnectWithoutVisitInput = {
    where: MedicalStudyWhereUniqueInput
    create: XOR<MedicalStudyCreateWithoutVisitInput, MedicalStudyUncheckedCreateWithoutVisitInput>
  }

  export type MedicalStudyCreateManyVisitInputEnvelope = {
    data: MedicalStudyCreateManyVisitInput | MedicalStudyCreateManyVisitInput[]
    skipDuplicates?: boolean
  }

  export type ClinicalHistoryUpsertWithoutVisitsInput = {
    update: XOR<ClinicalHistoryUpdateWithoutVisitsInput, ClinicalHistoryUncheckedUpdateWithoutVisitsInput>
    create: XOR<ClinicalHistoryCreateWithoutVisitsInput, ClinicalHistoryUncheckedCreateWithoutVisitsInput>
    where?: ClinicalHistoryWhereInput
  }

  export type ClinicalHistoryUpdateToOneWithWhereWithoutVisitsInput = {
    where?: ClinicalHistoryWhereInput
    data: XOR<ClinicalHistoryUpdateWithoutVisitsInput, ClinicalHistoryUncheckedUpdateWithoutVisitsInput>
  }

  export type ClinicalHistoryUpdateWithoutVisitsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutClinicalHistoryNestedInput
  }

  export type ClinicalHistoryUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutVisitsInput = {
    update: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type UserUpdateWithoutVisitsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: PatientUpdateManyWithoutProfessionalNestedInput
    specialties?: SpecialtyUpdateManyWithoutProfessionalsNestedInput
  }

  export type UserUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: PatientUncheckedUpdateManyWithoutProfessionalNestedInput
    specialties?: SpecialtyUncheckedUpdateManyWithoutProfessionalsNestedInput
  }

  export type MedicalStudyUpsertWithWhereUniqueWithoutVisitInput = {
    where: MedicalStudyWhereUniqueInput
    update: XOR<MedicalStudyUpdateWithoutVisitInput, MedicalStudyUncheckedUpdateWithoutVisitInput>
    create: XOR<MedicalStudyCreateWithoutVisitInput, MedicalStudyUncheckedCreateWithoutVisitInput>
  }

  export type MedicalStudyUpdateWithWhereUniqueWithoutVisitInput = {
    where: MedicalStudyWhereUniqueInput
    data: XOR<MedicalStudyUpdateWithoutVisitInput, MedicalStudyUncheckedUpdateWithoutVisitInput>
  }

  export type MedicalStudyUpdateManyWithWhereWithoutVisitInput = {
    where: MedicalStudyScalarWhereInput
    data: XOR<MedicalStudyUpdateManyMutationInput, MedicalStudyUncheckedUpdateManyWithoutVisitInput>
  }

  export type MedicalStudyScalarWhereInput = {
    AND?: MedicalStudyScalarWhereInput | MedicalStudyScalarWhereInput[]
    OR?: MedicalStudyScalarWhereInput[]
    NOT?: MedicalStudyScalarWhereInput | MedicalStudyScalarWhereInput[]
    id?: IntFilter<"MedicalStudy"> | number
    fileName?: StringFilter<"MedicalStudy"> | string
    fileUrl?: StringFilter<"MedicalStudy"> | string
    fileType?: StringFilter<"MedicalStudy"> | string
    uploadedAt?: DateTimeFilter<"MedicalStudy"> | Date | string
    visitId?: IntFilter<"MedicalStudy"> | number
  }

  export type VisitCreateWithoutStudiesInput = {
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistory: ClinicalHistoryCreateNestedOneWithoutVisitsInput
    professional: UserCreateNestedOneWithoutVisitsInput
  }

  export type VisitUncheckedCreateWithoutStudiesInput = {
    id?: number
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistoryId: number
    professionalId: number
  }

  export type VisitCreateOrConnectWithoutStudiesInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutStudiesInput, VisitUncheckedCreateWithoutStudiesInput>
  }

  export type VisitUpsertWithoutStudiesInput = {
    update: XOR<VisitUpdateWithoutStudiesInput, VisitUncheckedUpdateWithoutStudiesInput>
    create: XOR<VisitCreateWithoutStudiesInput, VisitUncheckedCreateWithoutStudiesInput>
    where?: VisitWhereInput
  }

  export type VisitUpdateToOneWithWhereWithoutStudiesInput = {
    where?: VisitWhereInput
    data: XOR<VisitUpdateWithoutStudiesInput, VisitUncheckedUpdateWithoutStudiesInput>
  }

  export type VisitUpdateWithoutStudiesInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    clinicalHistory?: ClinicalHistoryUpdateOneRequiredWithoutVisitsNestedInput
    professional?: UserUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitUncheckedUpdateWithoutStudiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    clinicalHistoryId?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
  }

  export type PatientCreateManyProfessionalInput = {
    id?: number
    name: string
    dni: string
    email: string
    phone?: string | null
    dateOfBirth?: Date | string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitCreateManyProfessionalInput = {
    id?: number
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    clinicalHistoryId: number
  }

  export type PatientUpdateWithoutProfessionalInput = {
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinicalHistory?: ClinicalHistoryUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinicalHistory?: ClinicalHistoryUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitUpdateWithoutProfessionalInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    clinicalHistory?: ClinicalHistoryUpdateOneRequiredWithoutVisitsNestedInput
    studies?: MedicalStudyUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    clinicalHistoryId?: IntFieldUpdateOperationsInput | number
    studies?: MedicalStudyUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateManyWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    clinicalHistoryId?: IntFieldUpdateOperationsInput | number
  }

  export type SpecialtyUpdateWithoutProfessionalsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtyUncheckedUpdateWithoutProfessionalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtyUncheckedUpdateManyWithoutProfessionalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutSpecialtiesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: PatientUpdateManyWithoutProfessionalNestedInput
    visits?: VisitUpdateManyWithoutProfessionalNestedInput
  }

  export type UserUncheckedUpdateWithoutSpecialtiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: PatientUncheckedUpdateManyWithoutProfessionalNestedInput
    visits?: VisitUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSpecialtiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitCreateManyClinicalHistoryInput = {
    id?: number
    visitDate?: Date | string
    reason: string
    epicrisis: string
    diagnosis: string
    treatment: string
    professionalId: number
  }

  export type VisitUpdateWithoutClinicalHistoryInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    professional?: UserUpdateOneRequiredWithoutVisitsNestedInput
    studies?: MedicalStudyUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateWithoutClinicalHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    professionalId?: IntFieldUpdateOperationsInput | number
    studies?: MedicalStudyUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type VisitUncheckedUpdateManyWithoutClinicalHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    epicrisis?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    professionalId?: IntFieldUpdateOperationsInput | number
  }

  export type MedicalStudyCreateManyVisitInput = {
    id?: number
    fileName: string
    fileUrl: string
    fileType: string
    uploadedAt?: Date | string
  }

  export type MedicalStudyUpdateWithoutVisitInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalStudyUncheckedUpdateWithoutVisitInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalStudyUncheckedUpdateManyWithoutVisitInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}