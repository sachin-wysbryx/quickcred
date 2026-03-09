
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Loan
 * 
 */
export type Loan = $Result.DefaultSelection<Prisma.$LoanPayload>
/**
 * Model Repayment
 * 
 */
export type Repayment = $Result.DefaultSelection<Prisma.$RepaymentPayload>
/**
 * Model OTPVerification
 * 
 */
export type OTPVerification = $Result.DefaultSelection<Prisma.$OTPVerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LoanStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  OVERDUE: 'OVERDUE'
};

export type LoanStatus = (typeof LoanStatus)[keyof typeof LoanStatus]

}

export type LoanStatus = $Enums.LoanStatus

export const LoanStatus: typeof $Enums.LoanStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **Loan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loans
    * const loans = await prisma.loan.findMany()
    * ```
    */
  get loan(): Prisma.LoanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repayment`: Exposes CRUD operations for the **Repayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repayments
    * const repayments = await prisma.repayment.findMany()
    * ```
    */
  get repayment(): Prisma.RepaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oTPVerification`: Exposes CRUD operations for the **OTPVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPVerifications
    * const oTPVerifications = await prisma.oTPVerification.findMany()
    * ```
    */
  get oTPVerification(): Prisma.OTPVerificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Admin: 'Admin',
    Customer: 'Customer',
    Loan: 'Loan',
    Repayment: 'Repayment',
    OTPVerification: 'OTPVerification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "customer" | "loan" | "repayment" | "oTPVerification"
      txIsolationLevel: never
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CustomerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CustomerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Loan: {
        payload: Prisma.$LoanPayload<ExtArgs>
        fields: Prisma.LoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findFirst: {
            args: Prisma.LoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          findMany: {
            args: Prisma.LoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>[]
          }
          create: {
            args: Prisma.LoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          createMany: {
            args: Prisma.LoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          update: {
            args: Prisma.LoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          deleteMany: {
            args: Prisma.LoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanPayload>
          }
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoan>
          }
          groupBy: {
            args: Prisma.LoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LoanFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LoanAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LoanCountArgs<ExtArgs>
            result: $Utils.Optional<LoanCountAggregateOutputType> | number
          }
        }
      }
      Repayment: {
        payload: Prisma.$RepaymentPayload<ExtArgs>
        fields: Prisma.RepaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload>
          }
          findFirst: {
            args: Prisma.RepaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload>
          }
          findMany: {
            args: Prisma.RepaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload>[]
          }
          create: {
            args: Prisma.RepaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload>
          }
          createMany: {
            args: Prisma.RepaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RepaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload>
          }
          update: {
            args: Prisma.RepaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload>
          }
          deleteMany: {
            args: Prisma.RepaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RepaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepaymentPayload>
          }
          aggregate: {
            args: Prisma.RepaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepayment>
          }
          groupBy: {
            args: Prisma.RepaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RepaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RepaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RepaymentCountArgs<ExtArgs>
            result: $Utils.Optional<RepaymentCountAggregateOutputType> | number
          }
        }
      }
      OTPVerification: {
        payload: Prisma.$OTPVerificationPayload<ExtArgs>
        fields: Prisma.OTPVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          findFirst: {
            args: Prisma.OTPVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          findMany: {
            args: Prisma.OTPVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>[]
          }
          create: {
            args: Prisma.OTPVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          createMany: {
            args: Prisma.OTPVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OTPVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          update: {
            args: Prisma.OTPVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          deleteMany: {
            args: Prisma.OTPVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OTPVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPVerificationPayload>
          }
          aggregate: {
            args: Prisma.OTPVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTPVerification>
          }
          groupBy: {
            args: Prisma.OTPVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPVerificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OTPVerificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OTPVerificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OTPVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<OTPVerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    }
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
    admin?: AdminOmit
    customer?: CustomerOmit
    loan?: LoanOmit
    repayment?: RepaymentOmit
    oTPVerification?: OTPVerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    loans: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | CustomerCountOutputTypeCountLoansArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
  }


  /**
   * Count Type LoanCountOutputType
   */

  export type LoanCountOutputType = {
    repayments: number
  }

  export type LoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repayments?: boolean | LoanCountOutputTypeCountRepaymentsArgs
  }

  // Custom InputTypes
  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanCountOutputType
     */
    select?: LoanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountRepaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    address: number
    createdAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string
    address: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    loans?: boolean | Customer$loansArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "address" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loans?: boolean | Customer$loansArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      loans: Prisma.$LoanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      address: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * @param {CustomerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const customer = await prisma.customer.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CustomerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Customer.
     * @param {CustomerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const customer = await prisma.customer.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CustomerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loans<T extends Customer$loansArgs<ExtArgs> = {}>(args?: Subset<T, Customer$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer findRaw
   */
  export type CustomerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Customer aggregateRaw
   */
  export type CustomerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Customer.loans
   */
  export type Customer$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    cursor?: LoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  export type LoanAvgAggregateOutputType = {
    loanAmount: number | null
    interest: number | null
    amountGiven: number | null
    totalRepayment: number | null
    weeklyInstallment: number | null
    durationWeeks: number | null
  }

  export type LoanSumAggregateOutputType = {
    loanAmount: number | null
    interest: number | null
    amountGiven: number | null
    totalRepayment: number | null
    weeklyInstallment: number | null
    durationWeeks: number | null
  }

  export type LoanMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    loanAmount: number | null
    interest: number | null
    amountGiven: number | null
    totalRepayment: number | null
    weeklyInstallment: number | null
    durationWeeks: number | null
    startDate: Date | null
    status: $Enums.LoanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    loanAmount: number | null
    interest: number | null
    amountGiven: number | null
    totalRepayment: number | null
    weeklyInstallment: number | null
    durationWeeks: number | null
    startDate: Date | null
    status: $Enums.LoanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanCountAggregateOutputType = {
    id: number
    customerId: number
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoanAvgAggregateInputType = {
    loanAmount?: true
    interest?: true
    amountGiven?: true
    totalRepayment?: true
    weeklyInstallment?: true
    durationWeeks?: true
  }

  export type LoanSumAggregateInputType = {
    loanAmount?: true
    interest?: true
    amountGiven?: true
    totalRepayment?: true
    weeklyInstallment?: true
    durationWeeks?: true
  }

  export type LoanMinAggregateInputType = {
    id?: true
    customerId?: true
    loanAmount?: true
    interest?: true
    amountGiven?: true
    totalRepayment?: true
    weeklyInstallment?: true
    durationWeeks?: true
    startDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanMaxAggregateInputType = {
    id?: true
    customerId?: true
    loanAmount?: true
    interest?: true
    amountGiven?: true
    totalRepayment?: true
    weeklyInstallment?: true
    durationWeeks?: true
    startDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanCountAggregateInputType = {
    id?: true
    customerId?: true
    loanAmount?: true
    interest?: true
    amountGiven?: true
    totalRepayment?: true
    weeklyInstallment?: true
    durationWeeks?: true
    startDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loan to aggregate.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loans
    **/
    _count?: true | LoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanMaxAggregateInputType
  }

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>
  }




  export type LoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanWhereInput
    orderBy?: LoanOrderByWithAggregationInput | LoanOrderByWithAggregationInput[]
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum
    having?: LoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanCountAggregateInputType | true
    _avg?: LoanAvgAggregateInputType
    _sum?: LoanSumAggregateInputType
    _min?: LoanMinAggregateInputType
    _max?: LoanMaxAggregateInputType
  }

  export type LoanGroupByOutputType = {
    id: string
    customerId: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate: Date
    status: $Enums.LoanStatus
    createdAt: Date
    updatedAt: Date
    _count: LoanCountAggregateOutputType | null
    _avg: LoanAvgAggregateOutputType | null
    _sum: LoanSumAggregateOutputType | null
    _min: LoanMinAggregateOutputType | null
    _max: LoanMaxAggregateOutputType | null
  }

  type GetLoanGroupByPayload<T extends LoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanGroupByOutputType[P]>
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
        }
      >
    >


  export type LoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    loanAmount?: boolean
    interest?: boolean
    amountGiven?: boolean
    totalRepayment?: boolean
    weeklyInstallment?: boolean
    durationWeeks?: boolean
    startDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    repayments?: boolean | Loan$repaymentsArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loan"]>



  export type LoanSelectScalar = {
    id?: boolean
    customerId?: boolean
    loanAmount?: boolean
    interest?: boolean
    amountGiven?: boolean
    totalRepayment?: boolean
    weeklyInstallment?: boolean
    durationWeeks?: boolean
    startDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "loanAmount" | "interest" | "amountGiven" | "totalRepayment" | "weeklyInstallment" | "durationWeeks" | "startDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["loan"]>
  export type LoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    repayments?: boolean | Loan$repaymentsArgs<ExtArgs>
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Loan"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      repayments: Prisma.$RepaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      loanAmount: number
      interest: number
      amountGiven: number
      totalRepayment: number
      weeklyInstallment: number
      durationWeeks: number
      startDate: Date
      status: $Enums.LoanStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["loan"]>
    composites: {}
  }

  type LoanGetPayload<S extends boolean | null | undefined | LoanDefaultArgs> = $Result.GetResult<Prisma.$LoanPayload, S>

  type LoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanCountAggregateInputType | true
    }

  export interface LoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Loan'], meta: { name: 'Loan' } }
    /**
     * Find zero or one Loan that matches the filter.
     * @param {LoanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanFindUniqueArgs>(args: SelectSubset<T, LoanFindUniqueArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Loan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanFindFirstArgs>(args?: SelectSubset<T, LoanFindFirstArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     * 
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanFindManyArgs>(args?: SelectSubset<T, LoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Loan.
     * @param {LoanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     * 
     */
    create<T extends LoanCreateArgs>(args: SelectSubset<T, LoanCreateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Loans.
     * @param {LoanCreateManyArgs} args - Arguments to create many Loans.
     * @example
     * // Create many Loans
     * const loan = await prisma.loan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanCreateManyArgs>(args?: SelectSubset<T, LoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Loan.
     * @param {LoanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     * 
     */
    delete<T extends LoanDeleteArgs>(args: SelectSubset<T, LoanDeleteArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Loan.
     * @param {LoanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanUpdateArgs>(args: SelectSubset<T, LoanUpdateArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Loans.
     * @param {LoanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanDeleteManyArgs>(args?: SelectSubset<T, LoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanUpdateManyArgs>(args: SelectSubset<T, LoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Loan.
     * @param {LoanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     */
    upsert<T extends LoanUpsertArgs>(args: SelectSubset<T, LoanUpsertArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Loans that matches the filter.
     * @param {LoanFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const loan = await prisma.loan.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LoanFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Loan.
     * @param {LoanAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const loan = await prisma.loan.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LoanAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
    **/
    count<T extends LoanCountArgs>(
      args?: Subset<T, LoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoanAggregateArgs>(args: Subset<T, LoanAggregateArgs>): Prisma.PrismaPromise<GetLoanAggregateType<T>>

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanGroupByArgs} args - Group by arguments.
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
      T extends LoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanGroupByArgs['orderBy'] }
        : { orderBy?: LoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Loan model
   */
  readonly fields: LoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    repayments<T extends Loan$repaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Loan$repaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Loan model
   */ 
  interface LoanFieldRefs {
    readonly id: FieldRef<"Loan", 'String'>
    readonly customerId: FieldRef<"Loan", 'String'>
    readonly loanAmount: FieldRef<"Loan", 'Float'>
    readonly interest: FieldRef<"Loan", 'Float'>
    readonly amountGiven: FieldRef<"Loan", 'Float'>
    readonly totalRepayment: FieldRef<"Loan", 'Float'>
    readonly weeklyInstallment: FieldRef<"Loan", 'Float'>
    readonly durationWeeks: FieldRef<"Loan", 'Int'>
    readonly startDate: FieldRef<"Loan", 'DateTime'>
    readonly status: FieldRef<"Loan", 'LoanStatus'>
    readonly createdAt: FieldRef<"Loan", 'DateTime'>
    readonly updatedAt: FieldRef<"Loan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Loan findUnique
   */
  export type LoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findUniqueOrThrow
   */
  export type LoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan findFirst
   */
  export type LoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findFirstOrThrow
   */
  export type LoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loan to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan findMany
   */
  export type LoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter, which Loans to fetch.
     */
    where?: LoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loans to fetch.
     */
    orderBy?: LoanOrderByWithRelationInput | LoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loans.
     */
    cursor?: LoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loans.
     */
    skip?: number
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[]
  }

  /**
   * Loan create
   */
  export type LoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to create a Loan.
     */
    data: XOR<LoanCreateInput, LoanUncheckedCreateInput>
  }

  /**
   * Loan createMany
   */
  export type LoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loans.
     */
    data: LoanCreateManyInput | LoanCreateManyInput[]
  }

  /**
   * Loan update
   */
  export type LoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The data needed to update a Loan.
     */
    data: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
    /**
     * Choose, which Loan to update.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan updateMany
   */
  export type LoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loans.
     */
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyInput>
    /**
     * Filter which Loans to update
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to update.
     */
    limit?: number
  }

  /**
   * Loan upsert
   */
  export type LoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * The filter to search for the Loan to update in case it exists.
     */
    where: LoanWhereUniqueInput
    /**
     * In case the Loan found by the `where` argument doesn't exist, create a new Loan with this data.
     */
    create: XOR<LoanCreateInput, LoanUncheckedCreateInput>
    /**
     * In case the Loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanUpdateInput, LoanUncheckedUpdateInput>
  }

  /**
   * Loan delete
   */
  export type LoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
    /**
     * Filter which Loan to delete.
     */
    where: LoanWhereUniqueInput
  }

  /**
   * Loan deleteMany
   */
  export type LoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loans to delete
     */
    where?: LoanWhereInput
    /**
     * Limit how many Loans to delete.
     */
    limit?: number
  }

  /**
   * Loan findRaw
   */
  export type LoanFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Loan aggregateRaw
   */
  export type LoanAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Loan.repayments
   */
  export type Loan$repaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    where?: RepaymentWhereInput
    orderBy?: RepaymentOrderByWithRelationInput | RepaymentOrderByWithRelationInput[]
    cursor?: RepaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepaymentScalarFieldEnum | RepaymentScalarFieldEnum[]
  }

  /**
   * Loan without action
   */
  export type LoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: LoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Loan
     */
    omit?: LoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanInclude<ExtArgs> | null
  }


  /**
   * Model Repayment
   */

  export type AggregateRepayment = {
    _count: RepaymentCountAggregateOutputType | null
    _avg: RepaymentAvgAggregateOutputType | null
    _sum: RepaymentSumAggregateOutputType | null
    _min: RepaymentMinAggregateOutputType | null
    _max: RepaymentMaxAggregateOutputType | null
  }

  export type RepaymentAvgAggregateOutputType = {
    weekNumber: number | null
    amount: number | null
  }

  export type RepaymentSumAggregateOutputType = {
    weekNumber: number | null
    amount: number | null
  }

  export type RepaymentMinAggregateOutputType = {
    id: string | null
    loanId: string | null
    weekNumber: number | null
    amount: number | null
    paid: boolean | null
    paidDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepaymentMaxAggregateOutputType = {
    id: string | null
    loanId: string | null
    weekNumber: number | null
    amount: number | null
    paid: boolean | null
    paidDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepaymentCountAggregateOutputType = {
    id: number
    loanId: number
    weekNumber: number
    amount: number
    paid: number
    paidDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepaymentAvgAggregateInputType = {
    weekNumber?: true
    amount?: true
  }

  export type RepaymentSumAggregateInputType = {
    weekNumber?: true
    amount?: true
  }

  export type RepaymentMinAggregateInputType = {
    id?: true
    loanId?: true
    weekNumber?: true
    amount?: true
    paid?: true
    paidDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepaymentMaxAggregateInputType = {
    id?: true
    loanId?: true
    weekNumber?: true
    amount?: true
    paid?: true
    paidDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepaymentCountAggregateInputType = {
    id?: true
    loanId?: true
    weekNumber?: true
    amount?: true
    paid?: true
    paidDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repayment to aggregate.
     */
    where?: RepaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repayments to fetch.
     */
    orderBy?: RepaymentOrderByWithRelationInput | RepaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repayments
    **/
    _count?: true | RepaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepaymentMaxAggregateInputType
  }

  export type GetRepaymentAggregateType<T extends RepaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateRepayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepayment[P]>
      : GetScalarType<T[P], AggregateRepayment[P]>
  }




  export type RepaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepaymentWhereInput
    orderBy?: RepaymentOrderByWithAggregationInput | RepaymentOrderByWithAggregationInput[]
    by: RepaymentScalarFieldEnum[] | RepaymentScalarFieldEnum
    having?: RepaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepaymentCountAggregateInputType | true
    _avg?: RepaymentAvgAggregateInputType
    _sum?: RepaymentSumAggregateInputType
    _min?: RepaymentMinAggregateInputType
    _max?: RepaymentMaxAggregateInputType
  }

  export type RepaymentGroupByOutputType = {
    id: string
    loanId: string
    weekNumber: number
    amount: number
    paid: boolean
    paidDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RepaymentCountAggregateOutputType | null
    _avg: RepaymentAvgAggregateOutputType | null
    _sum: RepaymentSumAggregateOutputType | null
    _min: RepaymentMinAggregateOutputType | null
    _max: RepaymentMaxAggregateOutputType | null
  }

  type GetRepaymentGroupByPayload<T extends RepaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepaymentGroupByOutputType[P]>
            : GetScalarType<T[P], RepaymentGroupByOutputType[P]>
        }
      >
    >


  export type RepaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loanId?: boolean
    weekNumber?: boolean
    amount?: boolean
    paid?: boolean
    paidDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loan?: boolean | LoanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repayment"]>



  export type RepaymentSelectScalar = {
    id?: boolean
    loanId?: boolean
    weekNumber?: boolean
    amount?: boolean
    paid?: boolean
    paidDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "loanId" | "weekNumber" | "amount" | "paid" | "paidDate" | "createdAt" | "updatedAt", ExtArgs["result"]["repayment"]>
  export type RepaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | LoanDefaultArgs<ExtArgs>
  }

  export type $RepaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repayment"
    objects: {
      loan: Prisma.$LoanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      loanId: string
      weekNumber: number
      amount: number
      paid: boolean
      paidDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repayment"]>
    composites: {}
  }

  type RepaymentGetPayload<S extends boolean | null | undefined | RepaymentDefaultArgs> = $Result.GetResult<Prisma.$RepaymentPayload, S>

  type RepaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepaymentCountAggregateInputType | true
    }

  export interface RepaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repayment'], meta: { name: 'Repayment' } }
    /**
     * Find zero or one Repayment that matches the filter.
     * @param {RepaymentFindUniqueArgs} args - Arguments to find a Repayment
     * @example
     * // Get one Repayment
     * const repayment = await prisma.repayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepaymentFindUniqueArgs>(args: SelectSubset<T, RepaymentFindUniqueArgs<ExtArgs>>): Prisma__RepaymentClient<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Repayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepaymentFindUniqueOrThrowArgs} args - Arguments to find a Repayment
     * @example
     * // Get one Repayment
     * const repayment = await prisma.repayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, RepaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepaymentClient<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Repayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepaymentFindFirstArgs} args - Arguments to find a Repayment
     * @example
     * // Get one Repayment
     * const repayment = await prisma.repayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepaymentFindFirstArgs>(args?: SelectSubset<T, RepaymentFindFirstArgs<ExtArgs>>): Prisma__RepaymentClient<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Repayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepaymentFindFirstOrThrowArgs} args - Arguments to find a Repayment
     * @example
     * // Get one Repayment
     * const repayment = await prisma.repayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, RepaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepaymentClient<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Repayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repayments
     * const repayments = await prisma.repayment.findMany()
     * 
     * // Get first 10 Repayments
     * const repayments = await prisma.repayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repaymentWithIdOnly = await prisma.repayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepaymentFindManyArgs>(args?: SelectSubset<T, RepaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Repayment.
     * @param {RepaymentCreateArgs} args - Arguments to create a Repayment.
     * @example
     * // Create one Repayment
     * const Repayment = await prisma.repayment.create({
     *   data: {
     *     // ... data to create a Repayment
     *   }
     * })
     * 
     */
    create<T extends RepaymentCreateArgs>(args: SelectSubset<T, RepaymentCreateArgs<ExtArgs>>): Prisma__RepaymentClient<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Repayments.
     * @param {RepaymentCreateManyArgs} args - Arguments to create many Repayments.
     * @example
     * // Create many Repayments
     * const repayment = await prisma.repayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepaymentCreateManyArgs>(args?: SelectSubset<T, RepaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Repayment.
     * @param {RepaymentDeleteArgs} args - Arguments to delete one Repayment.
     * @example
     * // Delete one Repayment
     * const Repayment = await prisma.repayment.delete({
     *   where: {
     *     // ... filter to delete one Repayment
     *   }
     * })
     * 
     */
    delete<T extends RepaymentDeleteArgs>(args: SelectSubset<T, RepaymentDeleteArgs<ExtArgs>>): Prisma__RepaymentClient<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Repayment.
     * @param {RepaymentUpdateArgs} args - Arguments to update one Repayment.
     * @example
     * // Update one Repayment
     * const repayment = await prisma.repayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepaymentUpdateArgs>(args: SelectSubset<T, RepaymentUpdateArgs<ExtArgs>>): Prisma__RepaymentClient<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Repayments.
     * @param {RepaymentDeleteManyArgs} args - Arguments to filter Repayments to delete.
     * @example
     * // Delete a few Repayments
     * const { count } = await prisma.repayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepaymentDeleteManyArgs>(args?: SelectSubset<T, RepaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repayments
     * const repayment = await prisma.repayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepaymentUpdateManyArgs>(args: SelectSubset<T, RepaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Repayment.
     * @param {RepaymentUpsertArgs} args - Arguments to update or create a Repayment.
     * @example
     * // Update or create a Repayment
     * const repayment = await prisma.repayment.upsert({
     *   create: {
     *     // ... data to create a Repayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repayment we want to update
     *   }
     * })
     */
    upsert<T extends RepaymentUpsertArgs>(args: SelectSubset<T, RepaymentUpsertArgs<ExtArgs>>): Prisma__RepaymentClient<$Result.GetResult<Prisma.$RepaymentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Repayments that matches the filter.
     * @param {RepaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const repayment = await prisma.repayment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RepaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Repayment.
     * @param {RepaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const repayment = await prisma.repayment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RepaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Repayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepaymentCountArgs} args - Arguments to filter Repayments to count.
     * @example
     * // Count the number of Repayments
     * const count = await prisma.repayment.count({
     *   where: {
     *     // ... the filter for the Repayments we want to count
     *   }
     * })
    **/
    count<T extends RepaymentCountArgs>(
      args?: Subset<T, RepaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepaymentAggregateArgs>(args: Subset<T, RepaymentAggregateArgs>): Prisma.PrismaPromise<GetRepaymentAggregateType<T>>

    /**
     * Group by Repayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepaymentGroupByArgs} args - Group by arguments.
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
      T extends RepaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepaymentGroupByArgs['orderBy'] }
        : { orderBy?: RepaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repayment model
   */
  readonly fields: RepaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loan<T extends LoanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoanDefaultArgs<ExtArgs>>): Prisma__LoanClient<$Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Repayment model
   */ 
  interface RepaymentFieldRefs {
    readonly id: FieldRef<"Repayment", 'String'>
    readonly loanId: FieldRef<"Repayment", 'String'>
    readonly weekNumber: FieldRef<"Repayment", 'Int'>
    readonly amount: FieldRef<"Repayment", 'Float'>
    readonly paid: FieldRef<"Repayment", 'Boolean'>
    readonly paidDate: FieldRef<"Repayment", 'DateTime'>
    readonly createdAt: FieldRef<"Repayment", 'DateTime'>
    readonly updatedAt: FieldRef<"Repayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repayment findUnique
   */
  export type RepaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * Filter, which Repayment to fetch.
     */
    where: RepaymentWhereUniqueInput
  }

  /**
   * Repayment findUniqueOrThrow
   */
  export type RepaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * Filter, which Repayment to fetch.
     */
    where: RepaymentWhereUniqueInput
  }

  /**
   * Repayment findFirst
   */
  export type RepaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * Filter, which Repayment to fetch.
     */
    where?: RepaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repayments to fetch.
     */
    orderBy?: RepaymentOrderByWithRelationInput | RepaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repayments.
     */
    cursor?: RepaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repayments.
     */
    distinct?: RepaymentScalarFieldEnum | RepaymentScalarFieldEnum[]
  }

  /**
   * Repayment findFirstOrThrow
   */
  export type RepaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * Filter, which Repayment to fetch.
     */
    where?: RepaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repayments to fetch.
     */
    orderBy?: RepaymentOrderByWithRelationInput | RepaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repayments.
     */
    cursor?: RepaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repayments.
     */
    distinct?: RepaymentScalarFieldEnum | RepaymentScalarFieldEnum[]
  }

  /**
   * Repayment findMany
   */
  export type RepaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * Filter, which Repayments to fetch.
     */
    where?: RepaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repayments to fetch.
     */
    orderBy?: RepaymentOrderByWithRelationInput | RepaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repayments.
     */
    cursor?: RepaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repayments.
     */
    skip?: number
    distinct?: RepaymentScalarFieldEnum | RepaymentScalarFieldEnum[]
  }

  /**
   * Repayment create
   */
  export type RepaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Repayment.
     */
    data: XOR<RepaymentCreateInput, RepaymentUncheckedCreateInput>
  }

  /**
   * Repayment createMany
   */
  export type RepaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repayments.
     */
    data: RepaymentCreateManyInput | RepaymentCreateManyInput[]
  }

  /**
   * Repayment update
   */
  export type RepaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Repayment.
     */
    data: XOR<RepaymentUpdateInput, RepaymentUncheckedUpdateInput>
    /**
     * Choose, which Repayment to update.
     */
    where: RepaymentWhereUniqueInput
  }

  /**
   * Repayment updateMany
   */
  export type RepaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repayments.
     */
    data: XOR<RepaymentUpdateManyMutationInput, RepaymentUncheckedUpdateManyInput>
    /**
     * Filter which Repayments to update
     */
    where?: RepaymentWhereInput
    /**
     * Limit how many Repayments to update.
     */
    limit?: number
  }

  /**
   * Repayment upsert
   */
  export type RepaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Repayment to update in case it exists.
     */
    where: RepaymentWhereUniqueInput
    /**
     * In case the Repayment found by the `where` argument doesn't exist, create a new Repayment with this data.
     */
    create: XOR<RepaymentCreateInput, RepaymentUncheckedCreateInput>
    /**
     * In case the Repayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepaymentUpdateInput, RepaymentUncheckedUpdateInput>
  }

  /**
   * Repayment delete
   */
  export type RepaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
    /**
     * Filter which Repayment to delete.
     */
    where: RepaymentWhereUniqueInput
  }

  /**
   * Repayment deleteMany
   */
  export type RepaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repayments to delete
     */
    where?: RepaymentWhereInput
    /**
     * Limit how many Repayments to delete.
     */
    limit?: number
  }

  /**
   * Repayment findRaw
   */
  export type RepaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Repayment aggregateRaw
   */
  export type RepaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Repayment without action
   */
  export type RepaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repayment
     */
    select?: RepaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repayment
     */
    omit?: RepaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepaymentInclude<ExtArgs> | null
  }


  /**
   * Model OTPVerification
   */

  export type AggregateOTPVerification = {
    _count: OTPVerificationCountAggregateOutputType | null
    _min: OTPVerificationMinAggregateOutputType | null
    _max: OTPVerificationMaxAggregateOutputType | null
  }

  export type OTPVerificationMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OTPVerificationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OTPVerificationCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OTPVerificationMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OTPVerificationMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OTPVerificationCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OTPVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPVerification to aggregate.
     */
    where?: OTPVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPVerifications to fetch.
     */
    orderBy?: OTPVerificationOrderByWithRelationInput | OTPVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPVerifications
    **/
    _count?: true | OTPVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPVerificationMaxAggregateInputType
  }

  export type GetOTPVerificationAggregateType<T extends OTPVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateOTPVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTPVerification[P]>
      : GetScalarType<T[P], AggregateOTPVerification[P]>
  }




  export type OTPVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPVerificationWhereInput
    orderBy?: OTPVerificationOrderByWithAggregationInput | OTPVerificationOrderByWithAggregationInput[]
    by: OTPVerificationScalarFieldEnum[] | OTPVerificationScalarFieldEnum
    having?: OTPVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPVerificationCountAggregateInputType | true
    _min?: OTPVerificationMinAggregateInputType
    _max?: OTPVerificationMaxAggregateInputType
  }

  export type OTPVerificationGroupByOutputType = {
    id: string
    email: string
    otp: string
    expiresAt: Date
    createdAt: Date
    _count: OTPVerificationCountAggregateOutputType | null
    _min: OTPVerificationMinAggregateOutputType | null
    _max: OTPVerificationMaxAggregateOutputType | null
  }

  type GetOTPVerificationGroupByPayload<T extends OTPVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], OTPVerificationGroupByOutputType[P]>
        }
      >
    >


  export type OTPVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oTPVerification"]>



  export type OTPVerificationSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OTPVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "expiresAt" | "createdAt", ExtArgs["result"]["oTPVerification"]>

  export type $OTPVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTPVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["oTPVerification"]>
    composites: {}
  }

  type OTPVerificationGetPayload<S extends boolean | null | undefined | OTPVerificationDefaultArgs> = $Result.GetResult<Prisma.$OTPVerificationPayload, S>

  type OTPVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OTPVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OTPVerificationCountAggregateInputType | true
    }

  export interface OTPVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTPVerification'], meta: { name: 'OTPVerification' } }
    /**
     * Find zero or one OTPVerification that matches the filter.
     * @param {OTPVerificationFindUniqueArgs} args - Arguments to find a OTPVerification
     * @example
     * // Get one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPVerificationFindUniqueArgs>(args: SelectSubset<T, OTPVerificationFindUniqueArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OTPVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OTPVerificationFindUniqueOrThrowArgs} args - Arguments to find a OTPVerification
     * @example
     * // Get one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OTPVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationFindFirstArgs} args - Arguments to find a OTPVerification
     * @example
     * // Get one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPVerificationFindFirstArgs>(args?: SelectSubset<T, OTPVerificationFindFirstArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OTPVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationFindFirstOrThrowArgs} args - Arguments to find a OTPVerification
     * @example
     * // Get one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OTPVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPVerifications
     * const oTPVerifications = await prisma.oTPVerification.findMany()
     * 
     * // Get first 10 OTPVerifications
     * const oTPVerifications = await prisma.oTPVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPVerificationWithIdOnly = await prisma.oTPVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPVerificationFindManyArgs>(args?: SelectSubset<T, OTPVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OTPVerification.
     * @param {OTPVerificationCreateArgs} args - Arguments to create a OTPVerification.
     * @example
     * // Create one OTPVerification
     * const OTPVerification = await prisma.oTPVerification.create({
     *   data: {
     *     // ... data to create a OTPVerification
     *   }
     * })
     * 
     */
    create<T extends OTPVerificationCreateArgs>(args: SelectSubset<T, OTPVerificationCreateArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OTPVerifications.
     * @param {OTPVerificationCreateManyArgs} args - Arguments to create many OTPVerifications.
     * @example
     * // Create many OTPVerifications
     * const oTPVerification = await prisma.oTPVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPVerificationCreateManyArgs>(args?: SelectSubset<T, OTPVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OTPVerification.
     * @param {OTPVerificationDeleteArgs} args - Arguments to delete one OTPVerification.
     * @example
     * // Delete one OTPVerification
     * const OTPVerification = await prisma.oTPVerification.delete({
     *   where: {
     *     // ... filter to delete one OTPVerification
     *   }
     * })
     * 
     */
    delete<T extends OTPVerificationDeleteArgs>(args: SelectSubset<T, OTPVerificationDeleteArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OTPVerification.
     * @param {OTPVerificationUpdateArgs} args - Arguments to update one OTPVerification.
     * @example
     * // Update one OTPVerification
     * const oTPVerification = await prisma.oTPVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPVerificationUpdateArgs>(args: SelectSubset<T, OTPVerificationUpdateArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OTPVerifications.
     * @param {OTPVerificationDeleteManyArgs} args - Arguments to filter OTPVerifications to delete.
     * @example
     * // Delete a few OTPVerifications
     * const { count } = await prisma.oTPVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPVerificationDeleteManyArgs>(args?: SelectSubset<T, OTPVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPVerifications
     * const oTPVerification = await prisma.oTPVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPVerificationUpdateManyArgs>(args: SelectSubset<T, OTPVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTPVerification.
     * @param {OTPVerificationUpsertArgs} args - Arguments to update or create a OTPVerification.
     * @example
     * // Update or create a OTPVerification
     * const oTPVerification = await prisma.oTPVerification.upsert({
     *   create: {
     *     // ... data to create a OTPVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTPVerification we want to update
     *   }
     * })
     */
    upsert<T extends OTPVerificationUpsertArgs>(args: SelectSubset<T, OTPVerificationUpsertArgs<ExtArgs>>): Prisma__OTPVerificationClient<$Result.GetResult<Prisma.$OTPVerificationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OTPVerifications that matches the filter.
     * @param {OTPVerificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const oTPVerification = await prisma.oTPVerification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OTPVerificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OTPVerification.
     * @param {OTPVerificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const oTPVerification = await prisma.oTPVerification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OTPVerificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OTPVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationCountArgs} args - Arguments to filter OTPVerifications to count.
     * @example
     * // Count the number of OTPVerifications
     * const count = await prisma.oTPVerification.count({
     *   where: {
     *     // ... the filter for the OTPVerifications we want to count
     *   }
     * })
    **/
    count<T extends OTPVerificationCountArgs>(
      args?: Subset<T, OTPVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTPVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OTPVerificationAggregateArgs>(args: Subset<T, OTPVerificationAggregateArgs>): Prisma.PrismaPromise<GetOTPVerificationAggregateType<T>>

    /**
     * Group by OTPVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPVerificationGroupByArgs} args - Group by arguments.
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
      T extends OTPVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPVerificationGroupByArgs['orderBy'] }
        : { orderBy?: OTPVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OTPVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTPVerification model
   */
  readonly fields: OTPVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTPVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the OTPVerification model
   */ 
  interface OTPVerificationFieldRefs {
    readonly id: FieldRef<"OTPVerification", 'String'>
    readonly email: FieldRef<"OTPVerification", 'String'>
    readonly otp: FieldRef<"OTPVerification", 'String'>
    readonly expiresAt: FieldRef<"OTPVerification", 'DateTime'>
    readonly createdAt: FieldRef<"OTPVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OTPVerification findUnique
   */
  export type OTPVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OTPVerification to fetch.
     */
    where: OTPVerificationWhereUniqueInput
  }

  /**
   * OTPVerification findUniqueOrThrow
   */
  export type OTPVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OTPVerification to fetch.
     */
    where: OTPVerificationWhereUniqueInput
  }

  /**
   * OTPVerification findFirst
   */
  export type OTPVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OTPVerification to fetch.
     */
    where?: OTPVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPVerifications to fetch.
     */
    orderBy?: OTPVerificationOrderByWithRelationInput | OTPVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPVerifications.
     */
    cursor?: OTPVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPVerifications.
     */
    distinct?: OTPVerificationScalarFieldEnum | OTPVerificationScalarFieldEnum[]
  }

  /**
   * OTPVerification findFirstOrThrow
   */
  export type OTPVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OTPVerification to fetch.
     */
    where?: OTPVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPVerifications to fetch.
     */
    orderBy?: OTPVerificationOrderByWithRelationInput | OTPVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPVerifications.
     */
    cursor?: OTPVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPVerifications.
     */
    distinct?: OTPVerificationScalarFieldEnum | OTPVerificationScalarFieldEnum[]
  }

  /**
   * OTPVerification findMany
   */
  export type OTPVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * Filter, which OTPVerifications to fetch.
     */
    where?: OTPVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPVerifications to fetch.
     */
    orderBy?: OTPVerificationOrderByWithRelationInput | OTPVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPVerifications.
     */
    cursor?: OTPVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPVerifications.
     */
    skip?: number
    distinct?: OTPVerificationScalarFieldEnum | OTPVerificationScalarFieldEnum[]
  }

  /**
   * OTPVerification create
   */
  export type OTPVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a OTPVerification.
     */
    data: XOR<OTPVerificationCreateInput, OTPVerificationUncheckedCreateInput>
  }

  /**
   * OTPVerification createMany
   */
  export type OTPVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPVerifications.
     */
    data: OTPVerificationCreateManyInput | OTPVerificationCreateManyInput[]
  }

  /**
   * OTPVerification update
   */
  export type OTPVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a OTPVerification.
     */
    data: XOR<OTPVerificationUpdateInput, OTPVerificationUncheckedUpdateInput>
    /**
     * Choose, which OTPVerification to update.
     */
    where: OTPVerificationWhereUniqueInput
  }

  /**
   * OTPVerification updateMany
   */
  export type OTPVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPVerifications.
     */
    data: XOR<OTPVerificationUpdateManyMutationInput, OTPVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OTPVerifications to update
     */
    where?: OTPVerificationWhereInput
    /**
     * Limit how many OTPVerifications to update.
     */
    limit?: number
  }

  /**
   * OTPVerification upsert
   */
  export type OTPVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the OTPVerification to update in case it exists.
     */
    where: OTPVerificationWhereUniqueInput
    /**
     * In case the OTPVerification found by the `where` argument doesn't exist, create a new OTPVerification with this data.
     */
    create: XOR<OTPVerificationCreateInput, OTPVerificationUncheckedCreateInput>
    /**
     * In case the OTPVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPVerificationUpdateInput, OTPVerificationUncheckedUpdateInput>
  }

  /**
   * OTPVerification delete
   */
  export type OTPVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
    /**
     * Filter which OTPVerification to delete.
     */
    where: OTPVerificationWhereUniqueInput
  }

  /**
   * OTPVerification deleteMany
   */
  export type OTPVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPVerifications to delete
     */
    where?: OTPVerificationWhereInput
    /**
     * Limit how many OTPVerifications to delete.
     */
    limit?: number
  }

  /**
   * OTPVerification findRaw
   */
  export type OTPVerificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OTPVerification aggregateRaw
   */
  export type OTPVerificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OTPVerification without action
   */
  export type OTPVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPVerification
     */
    select?: OTPVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPVerification
     */
    omit?: OTPVerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const LoanScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    loanAmount: 'loanAmount',
    interest: 'interest',
    amountGiven: 'amountGiven',
    totalRepayment: 'totalRepayment',
    weeklyInstallment: 'weeklyInstallment',
    durationWeeks: 'durationWeeks',
    startDate: 'startDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum]


  export const RepaymentScalarFieldEnum: {
    id: 'id',
    loanId: 'loanId',
    weekNumber: 'weekNumber',
    amount: 'amount',
    paid: 'paid',
    paidDate: 'paidDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepaymentScalarFieldEnum = (typeof RepaymentScalarFieldEnum)[keyof typeof RepaymentScalarFieldEnum]


  export const OTPVerificationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OTPVerificationScalarFieldEnum = (typeof OTPVerificationScalarFieldEnum)[keyof typeof OTPVerificationScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LoanStatus'
   */
  export type EnumLoanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoanStatus'>
    


  /**
   * Reference to a field of type 'LoanStatus[]'
   */
  export type ListEnumLoanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoanStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    loans?: LoanListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    loans?: LoanOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    loans?: LoanListRelationFilter
  }, "id" | "phone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type LoanWhereInput = {
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    id?: StringFilter<"Loan"> | string
    customerId?: StringFilter<"Loan"> | string
    loanAmount?: FloatFilter<"Loan"> | number
    interest?: FloatFilter<"Loan"> | number
    amountGiven?: FloatFilter<"Loan"> | number
    totalRepayment?: FloatFilter<"Loan"> | number
    weeklyInstallment?: FloatFilter<"Loan"> | number
    durationWeeks?: IntFilter<"Loan"> | number
    startDate?: DateTimeFilter<"Loan"> | Date | string
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    updatedAt?: DateTimeFilter<"Loan"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    repayments?: RepaymentListRelationFilter
  }

  export type LoanOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanAmount?: SortOrder
    interest?: SortOrder
    amountGiven?: SortOrder
    totalRepayment?: SortOrder
    weeklyInstallment?: SortOrder
    durationWeeks?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    repayments?: RepaymentOrderByRelationAggregateInput
  }

  export type LoanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoanWhereInput | LoanWhereInput[]
    OR?: LoanWhereInput[]
    NOT?: LoanWhereInput | LoanWhereInput[]
    customerId?: StringFilter<"Loan"> | string
    loanAmount?: FloatFilter<"Loan"> | number
    interest?: FloatFilter<"Loan"> | number
    amountGiven?: FloatFilter<"Loan"> | number
    totalRepayment?: FloatFilter<"Loan"> | number
    weeklyInstallment?: FloatFilter<"Loan"> | number
    durationWeeks?: IntFilter<"Loan"> | number
    startDate?: DateTimeFilter<"Loan"> | Date | string
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    updatedAt?: DateTimeFilter<"Loan"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    repayments?: RepaymentListRelationFilter
  }, "id">

  export type LoanOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanAmount?: SortOrder
    interest?: SortOrder
    amountGiven?: SortOrder
    totalRepayment?: SortOrder
    weeklyInstallment?: SortOrder
    durationWeeks?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoanCountOrderByAggregateInput
    _avg?: LoanAvgOrderByAggregateInput
    _max?: LoanMaxOrderByAggregateInput
    _min?: LoanMinOrderByAggregateInput
    _sum?: LoanSumOrderByAggregateInput
  }

  export type LoanScalarWhereWithAggregatesInput = {
    AND?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    OR?: LoanScalarWhereWithAggregatesInput[]
    NOT?: LoanScalarWhereWithAggregatesInput | LoanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Loan"> | string
    customerId?: StringWithAggregatesFilter<"Loan"> | string
    loanAmount?: FloatWithAggregatesFilter<"Loan"> | number
    interest?: FloatWithAggregatesFilter<"Loan"> | number
    amountGiven?: FloatWithAggregatesFilter<"Loan"> | number
    totalRepayment?: FloatWithAggregatesFilter<"Loan"> | number
    weeklyInstallment?: FloatWithAggregatesFilter<"Loan"> | number
    durationWeeks?: IntWithAggregatesFilter<"Loan"> | number
    startDate?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    status?: EnumLoanStatusWithAggregatesFilter<"Loan"> | $Enums.LoanStatus
    createdAt?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Loan"> | Date | string
  }

  export type RepaymentWhereInput = {
    AND?: RepaymentWhereInput | RepaymentWhereInput[]
    OR?: RepaymentWhereInput[]
    NOT?: RepaymentWhereInput | RepaymentWhereInput[]
    id?: StringFilter<"Repayment"> | string
    loanId?: StringFilter<"Repayment"> | string
    weekNumber?: IntFilter<"Repayment"> | number
    amount?: FloatFilter<"Repayment"> | number
    paid?: BoolFilter<"Repayment"> | boolean
    paidDate?: DateTimeNullableFilter<"Repayment"> | Date | string | null
    createdAt?: DateTimeFilter<"Repayment"> | Date | string
    updatedAt?: DateTimeFilter<"Repayment"> | Date | string
    loan?: XOR<LoanScalarRelationFilter, LoanWhereInput>
  }

  export type RepaymentOrderByWithRelationInput = {
    id?: SortOrder
    loanId?: SortOrder
    weekNumber?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paidDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loan?: LoanOrderByWithRelationInput
  }

  export type RepaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RepaymentWhereInput | RepaymentWhereInput[]
    OR?: RepaymentWhereInput[]
    NOT?: RepaymentWhereInput | RepaymentWhereInput[]
    loanId?: StringFilter<"Repayment"> | string
    weekNumber?: IntFilter<"Repayment"> | number
    amount?: FloatFilter<"Repayment"> | number
    paid?: BoolFilter<"Repayment"> | boolean
    paidDate?: DateTimeNullableFilter<"Repayment"> | Date | string | null
    createdAt?: DateTimeFilter<"Repayment"> | Date | string
    updatedAt?: DateTimeFilter<"Repayment"> | Date | string
    loan?: XOR<LoanScalarRelationFilter, LoanWhereInput>
  }, "id">

  export type RepaymentOrderByWithAggregationInput = {
    id?: SortOrder
    loanId?: SortOrder
    weekNumber?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paidDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepaymentCountOrderByAggregateInput
    _avg?: RepaymentAvgOrderByAggregateInput
    _max?: RepaymentMaxOrderByAggregateInput
    _min?: RepaymentMinOrderByAggregateInput
    _sum?: RepaymentSumOrderByAggregateInput
  }

  export type RepaymentScalarWhereWithAggregatesInput = {
    AND?: RepaymentScalarWhereWithAggregatesInput | RepaymentScalarWhereWithAggregatesInput[]
    OR?: RepaymentScalarWhereWithAggregatesInput[]
    NOT?: RepaymentScalarWhereWithAggregatesInput | RepaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repayment"> | string
    loanId?: StringWithAggregatesFilter<"Repayment"> | string
    weekNumber?: IntWithAggregatesFilter<"Repayment"> | number
    amount?: FloatWithAggregatesFilter<"Repayment"> | number
    paid?: BoolWithAggregatesFilter<"Repayment"> | boolean
    paidDate?: DateTimeNullableWithAggregatesFilter<"Repayment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Repayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Repayment"> | Date | string
  }

  export type OTPVerificationWhereInput = {
    AND?: OTPVerificationWhereInput | OTPVerificationWhereInput[]
    OR?: OTPVerificationWhereInput[]
    NOT?: OTPVerificationWhereInput | OTPVerificationWhereInput[]
    id?: StringFilter<"OTPVerification"> | string
    email?: StringFilter<"OTPVerification"> | string
    otp?: StringFilter<"OTPVerification"> | string
    expiresAt?: DateTimeFilter<"OTPVerification"> | Date | string
    createdAt?: DateTimeFilter<"OTPVerification"> | Date | string
  }

  export type OTPVerificationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OTPVerificationWhereInput | OTPVerificationWhereInput[]
    OR?: OTPVerificationWhereInput[]
    NOT?: OTPVerificationWhereInput | OTPVerificationWhereInput[]
    email?: StringFilter<"OTPVerification"> | string
    otp?: StringFilter<"OTPVerification"> | string
    expiresAt?: DateTimeFilter<"OTPVerification"> | Date | string
    createdAt?: DateTimeFilter<"OTPVerification"> | Date | string
  }, "id">

  export type OTPVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OTPVerificationCountOrderByAggregateInput
    _max?: OTPVerificationMaxOrderByAggregateInput
    _min?: OTPVerificationMinOrderByAggregateInput
  }

  export type OTPVerificationScalarWhereWithAggregatesInput = {
    AND?: OTPVerificationScalarWhereWithAggregatesInput | OTPVerificationScalarWhereWithAggregatesInput[]
    OR?: OTPVerificationScalarWhereWithAggregatesInput[]
    NOT?: OTPVerificationScalarWhereWithAggregatesInput | OTPVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTPVerification"> | string
    email?: StringWithAggregatesFilter<"OTPVerification"> | string
    otp?: StringWithAggregatesFilter<"OTPVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OTPVerification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OTPVerification"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    createdAt?: Date | string
    loans?: LoanCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    createdAt?: Date | string
    loans?: LoanUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loans?: LoanUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanCreateInput = {
    id?: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate?: Date | string
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLoansInput
    repayments?: RepaymentCreateNestedManyWithoutLoanInput
  }

  export type LoanUncheckedCreateInput = {
    id?: string
    customerId: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate?: Date | string
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    repayments?: RepaymentUncheckedCreateNestedManyWithoutLoanInput
  }

  export type LoanUpdateInput = {
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLoansNestedInput
    repayments?: RepaymentUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repayments?: RepaymentUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type LoanCreateManyInput = {
    id?: string
    customerId: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate?: Date | string
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanUpdateManyMutationInput = {
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepaymentCreateInput = {
    id?: string
    weekNumber: number
    amount: number
    paid?: boolean
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    loan: LoanCreateNestedOneWithoutRepaymentsInput
  }

  export type RepaymentUncheckedCreateInput = {
    id?: string
    loanId: string
    weekNumber: number
    amount: number
    paid?: boolean
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepaymentUpdateInput = {
    weekNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: LoanUpdateOneRequiredWithoutRepaymentsNestedInput
  }

  export type RepaymentUncheckedUpdateInput = {
    loanId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepaymentCreateManyInput = {
    id?: string
    loanId: string
    weekNumber: number
    amount: number
    paid?: boolean
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepaymentUpdateManyMutationInput = {
    weekNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepaymentUncheckedUpdateManyInput = {
    loanId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPVerificationCreateInput = {
    id?: string
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPVerificationUncheckedCreateInput = {
    id?: string
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPVerificationUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPVerificationUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPVerificationCreateManyInput = {
    id?: string
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OTPVerificationUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPVerificationUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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
    isSet?: boolean
  }

  export type LoanListRelationFilter = {
    every?: LoanWhereInput
    some?: LoanWhereInput
    none?: LoanWhereInput
  }

  export type LoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
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
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type EnumLoanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanStatusFilter<$PrismaModel> | $Enums.LoanStatus
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type RepaymentListRelationFilter = {
    every?: RepaymentWhereInput
    some?: RepaymentWhereInput
    none?: RepaymentWhereInput
  }

  export type RepaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanAmount?: SortOrder
    interest?: SortOrder
    amountGiven?: SortOrder
    totalRepayment?: SortOrder
    weeklyInstallment?: SortOrder
    durationWeeks?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanAvgOrderByAggregateInput = {
    loanAmount?: SortOrder
    interest?: SortOrder
    amountGiven?: SortOrder
    totalRepayment?: SortOrder
    weeklyInstallment?: SortOrder
    durationWeeks?: SortOrder
  }

  export type LoanMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanAmount?: SortOrder
    interest?: SortOrder
    amountGiven?: SortOrder
    totalRepayment?: SortOrder
    weeklyInstallment?: SortOrder
    durationWeeks?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    loanAmount?: SortOrder
    interest?: SortOrder
    amountGiven?: SortOrder
    totalRepayment?: SortOrder
    weeklyInstallment?: SortOrder
    durationWeeks?: SortOrder
    startDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanSumOrderByAggregateInput = {
    loanAmount?: SortOrder
    interest?: SortOrder
    amountGiven?: SortOrder
    totalRepayment?: SortOrder
    weeklyInstallment?: SortOrder
    durationWeeks?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumLoanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanStatusFilter<$PrismaModel>
    _max?: NestedEnumLoanStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
  }

  export type LoanScalarRelationFilter = {
    is?: LoanWhereInput
    isNot?: LoanWhereInput
  }

  export type RepaymentCountOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    weekNumber?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paidDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepaymentAvgOrderByAggregateInput = {
    weekNumber?: SortOrder
    amount?: SortOrder
  }

  export type RepaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    weekNumber?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paidDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepaymentMinOrderByAggregateInput = {
    id?: SortOrder
    loanId?: SortOrder
    weekNumber?: SortOrder
    amount?: SortOrder
    paid?: SortOrder
    paidDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepaymentSumOrderByAggregateInput = {
    weekNumber?: SortOrder
    amount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type OTPVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LoanCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LoanCreateWithoutCustomerInput, LoanUncheckedCreateWithoutCustomerInput> | LoanCreateWithoutCustomerInput[] | LoanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutCustomerInput | LoanCreateOrConnectWithoutCustomerInput[]
    createMany?: LoanCreateManyCustomerInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type LoanUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LoanCreateWithoutCustomerInput, LoanUncheckedCreateWithoutCustomerInput> | LoanCreateWithoutCustomerInput[] | LoanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutCustomerInput | LoanCreateOrConnectWithoutCustomerInput[]
    createMany?: LoanCreateManyCustomerInputEnvelope
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type LoanUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LoanCreateWithoutCustomerInput, LoanUncheckedCreateWithoutCustomerInput> | LoanCreateWithoutCustomerInput[] | LoanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutCustomerInput | LoanCreateOrConnectWithoutCustomerInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutCustomerInput | LoanUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LoanCreateManyCustomerInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutCustomerInput | LoanUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutCustomerInput | LoanUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type LoanUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LoanCreateWithoutCustomerInput, LoanUncheckedCreateWithoutCustomerInput> | LoanCreateWithoutCustomerInput[] | LoanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LoanCreateOrConnectWithoutCustomerInput | LoanCreateOrConnectWithoutCustomerInput[]
    upsert?: LoanUpsertWithWhereUniqueWithoutCustomerInput | LoanUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LoanCreateManyCustomerInputEnvelope
    set?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    disconnect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    delete?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    connect?: LoanWhereUniqueInput | LoanWhereUniqueInput[]
    update?: LoanUpdateWithWhereUniqueWithoutCustomerInput | LoanUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LoanUpdateManyWithWhereWithoutCustomerInput | LoanUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LoanScalarWhereInput | LoanScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutLoansInput = {
    create?: XOR<CustomerCreateWithoutLoansInput, CustomerUncheckedCreateWithoutLoansInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLoansInput
    connect?: CustomerWhereUniqueInput
  }

  export type RepaymentCreateNestedManyWithoutLoanInput = {
    create?: XOR<RepaymentCreateWithoutLoanInput, RepaymentUncheckedCreateWithoutLoanInput> | RepaymentCreateWithoutLoanInput[] | RepaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: RepaymentCreateOrConnectWithoutLoanInput | RepaymentCreateOrConnectWithoutLoanInput[]
    createMany?: RepaymentCreateManyLoanInputEnvelope
    connect?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
  }

  export type RepaymentUncheckedCreateNestedManyWithoutLoanInput = {
    create?: XOR<RepaymentCreateWithoutLoanInput, RepaymentUncheckedCreateWithoutLoanInput> | RepaymentCreateWithoutLoanInput[] | RepaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: RepaymentCreateOrConnectWithoutLoanInput | RepaymentCreateOrConnectWithoutLoanInput[]
    createMany?: RepaymentCreateManyLoanInputEnvelope
    connect?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLoanStatusFieldUpdateOperationsInput = {
    set?: $Enums.LoanStatus
  }

  export type CustomerUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<CustomerCreateWithoutLoansInput, CustomerUncheckedCreateWithoutLoansInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLoansInput
    upsert?: CustomerUpsertWithoutLoansInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLoansInput, CustomerUpdateWithoutLoansInput>, CustomerUncheckedUpdateWithoutLoansInput>
  }

  export type RepaymentUpdateManyWithoutLoanNestedInput = {
    create?: XOR<RepaymentCreateWithoutLoanInput, RepaymentUncheckedCreateWithoutLoanInput> | RepaymentCreateWithoutLoanInput[] | RepaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: RepaymentCreateOrConnectWithoutLoanInput | RepaymentCreateOrConnectWithoutLoanInput[]
    upsert?: RepaymentUpsertWithWhereUniqueWithoutLoanInput | RepaymentUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: RepaymentCreateManyLoanInputEnvelope
    set?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
    disconnect?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
    delete?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
    connect?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
    update?: RepaymentUpdateWithWhereUniqueWithoutLoanInput | RepaymentUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: RepaymentUpdateManyWithWhereWithoutLoanInput | RepaymentUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: RepaymentScalarWhereInput | RepaymentScalarWhereInput[]
  }

  export type RepaymentUncheckedUpdateManyWithoutLoanNestedInput = {
    create?: XOR<RepaymentCreateWithoutLoanInput, RepaymentUncheckedCreateWithoutLoanInput> | RepaymentCreateWithoutLoanInput[] | RepaymentUncheckedCreateWithoutLoanInput[]
    connectOrCreate?: RepaymentCreateOrConnectWithoutLoanInput | RepaymentCreateOrConnectWithoutLoanInput[]
    upsert?: RepaymentUpsertWithWhereUniqueWithoutLoanInput | RepaymentUpsertWithWhereUniqueWithoutLoanInput[]
    createMany?: RepaymentCreateManyLoanInputEnvelope
    set?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
    disconnect?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
    delete?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
    connect?: RepaymentWhereUniqueInput | RepaymentWhereUniqueInput[]
    update?: RepaymentUpdateWithWhereUniqueWithoutLoanInput | RepaymentUpdateWithWhereUniqueWithoutLoanInput[]
    updateMany?: RepaymentUpdateManyWithWhereWithoutLoanInput | RepaymentUpdateManyWithWhereWithoutLoanInput[]
    deleteMany?: RepaymentScalarWhereInput | RepaymentScalarWhereInput[]
  }

  export type LoanCreateNestedOneWithoutRepaymentsInput = {
    create?: XOR<LoanCreateWithoutRepaymentsInput, LoanUncheckedCreateWithoutRepaymentsInput>
    connectOrCreate?: LoanCreateOrConnectWithoutRepaymentsInput
    connect?: LoanWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type LoanUpdateOneRequiredWithoutRepaymentsNestedInput = {
    create?: XOR<LoanCreateWithoutRepaymentsInput, LoanUncheckedCreateWithoutRepaymentsInput>
    connectOrCreate?: LoanCreateOrConnectWithoutRepaymentsInput
    upsert?: LoanUpsertWithoutRepaymentsInput
    connect?: LoanWhereUniqueInput
    update?: XOR<XOR<LoanUpdateToOneWithWhereWithoutRepaymentsInput, LoanUpdateWithoutRepaymentsInput>, LoanUncheckedUpdateWithoutRepaymentsInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedEnumLoanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanStatusFilter<$PrismaModel> | $Enums.LoanStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoanStatus | EnumLoanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoanStatus[] | ListEnumLoanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLoanStatusWithAggregatesFilter<$PrismaModel> | $Enums.LoanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoanStatusFilter<$PrismaModel>
    _max?: NestedEnumLoanStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type LoanCreateWithoutCustomerInput = {
    id?: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate?: Date | string
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    repayments?: RepaymentCreateNestedManyWithoutLoanInput
  }

  export type LoanUncheckedCreateWithoutCustomerInput = {
    id?: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate?: Date | string
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    repayments?: RepaymentUncheckedCreateNestedManyWithoutLoanInput
  }

  export type LoanCreateOrConnectWithoutCustomerInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutCustomerInput, LoanUncheckedCreateWithoutCustomerInput>
  }

  export type LoanCreateManyCustomerInputEnvelope = {
    data: LoanCreateManyCustomerInput | LoanCreateManyCustomerInput[]
  }

  export type LoanUpsertWithWhereUniqueWithoutCustomerInput = {
    where: LoanWhereUniqueInput
    update: XOR<LoanUpdateWithoutCustomerInput, LoanUncheckedUpdateWithoutCustomerInput>
    create: XOR<LoanCreateWithoutCustomerInput, LoanUncheckedCreateWithoutCustomerInput>
  }

  export type LoanUpdateWithWhereUniqueWithoutCustomerInput = {
    where: LoanWhereUniqueInput
    data: XOR<LoanUpdateWithoutCustomerInput, LoanUncheckedUpdateWithoutCustomerInput>
  }

  export type LoanUpdateManyWithWhereWithoutCustomerInput = {
    where: LoanScalarWhereInput
    data: XOR<LoanUpdateManyMutationInput, LoanUncheckedUpdateManyWithoutCustomerInput>
  }

  export type LoanScalarWhereInput = {
    AND?: LoanScalarWhereInput | LoanScalarWhereInput[]
    OR?: LoanScalarWhereInput[]
    NOT?: LoanScalarWhereInput | LoanScalarWhereInput[]
    id?: StringFilter<"Loan"> | string
    customerId?: StringFilter<"Loan"> | string
    loanAmount?: FloatFilter<"Loan"> | number
    interest?: FloatFilter<"Loan"> | number
    amountGiven?: FloatFilter<"Loan"> | number
    totalRepayment?: FloatFilter<"Loan"> | number
    weeklyInstallment?: FloatFilter<"Loan"> | number
    durationWeeks?: IntFilter<"Loan"> | number
    startDate?: DateTimeFilter<"Loan"> | Date | string
    status?: EnumLoanStatusFilter<"Loan"> | $Enums.LoanStatus
    createdAt?: DateTimeFilter<"Loan"> | Date | string
    updatedAt?: DateTimeFilter<"Loan"> | Date | string
  }

  export type CustomerCreateWithoutLoansInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    createdAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutLoansInput = {
    id?: string
    name: string
    phone: string
    address?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutLoansInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLoansInput, CustomerUncheckedCreateWithoutLoansInput>
  }

  export type RepaymentCreateWithoutLoanInput = {
    id?: string
    weekNumber: number
    amount: number
    paid?: boolean
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepaymentUncheckedCreateWithoutLoanInput = {
    id?: string
    weekNumber: number
    amount: number
    paid?: boolean
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepaymentCreateOrConnectWithoutLoanInput = {
    where: RepaymentWhereUniqueInput
    create: XOR<RepaymentCreateWithoutLoanInput, RepaymentUncheckedCreateWithoutLoanInput>
  }

  export type RepaymentCreateManyLoanInputEnvelope = {
    data: RepaymentCreateManyLoanInput | RepaymentCreateManyLoanInput[]
  }

  export type CustomerUpsertWithoutLoansInput = {
    update: XOR<CustomerUpdateWithoutLoansInput, CustomerUncheckedUpdateWithoutLoansInput>
    create: XOR<CustomerCreateWithoutLoansInput, CustomerUncheckedCreateWithoutLoansInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutLoansInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutLoansInput, CustomerUncheckedUpdateWithoutLoansInput>
  }

  export type CustomerUpdateWithoutLoansInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutLoansInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepaymentUpsertWithWhereUniqueWithoutLoanInput = {
    where: RepaymentWhereUniqueInput
    update: XOR<RepaymentUpdateWithoutLoanInput, RepaymentUncheckedUpdateWithoutLoanInput>
    create: XOR<RepaymentCreateWithoutLoanInput, RepaymentUncheckedCreateWithoutLoanInput>
  }

  export type RepaymentUpdateWithWhereUniqueWithoutLoanInput = {
    where: RepaymentWhereUniqueInput
    data: XOR<RepaymentUpdateWithoutLoanInput, RepaymentUncheckedUpdateWithoutLoanInput>
  }

  export type RepaymentUpdateManyWithWhereWithoutLoanInput = {
    where: RepaymentScalarWhereInput
    data: XOR<RepaymentUpdateManyMutationInput, RepaymentUncheckedUpdateManyWithoutLoanInput>
  }

  export type RepaymentScalarWhereInput = {
    AND?: RepaymentScalarWhereInput | RepaymentScalarWhereInput[]
    OR?: RepaymentScalarWhereInput[]
    NOT?: RepaymentScalarWhereInput | RepaymentScalarWhereInput[]
    id?: StringFilter<"Repayment"> | string
    loanId?: StringFilter<"Repayment"> | string
    weekNumber?: IntFilter<"Repayment"> | number
    amount?: FloatFilter<"Repayment"> | number
    paid?: BoolFilter<"Repayment"> | boolean
    paidDate?: DateTimeNullableFilter<"Repayment"> | Date | string | null
    createdAt?: DateTimeFilter<"Repayment"> | Date | string
    updatedAt?: DateTimeFilter<"Repayment"> | Date | string
  }

  export type LoanCreateWithoutRepaymentsInput = {
    id?: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate?: Date | string
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLoansInput
  }

  export type LoanUncheckedCreateWithoutRepaymentsInput = {
    id?: string
    customerId: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate?: Date | string
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanCreateOrConnectWithoutRepaymentsInput = {
    where: LoanWhereUniqueInput
    create: XOR<LoanCreateWithoutRepaymentsInput, LoanUncheckedCreateWithoutRepaymentsInput>
  }

  export type LoanUpsertWithoutRepaymentsInput = {
    update: XOR<LoanUpdateWithoutRepaymentsInput, LoanUncheckedUpdateWithoutRepaymentsInput>
    create: XOR<LoanCreateWithoutRepaymentsInput, LoanUncheckedCreateWithoutRepaymentsInput>
    where?: LoanWhereInput
  }

  export type LoanUpdateToOneWithWhereWithoutRepaymentsInput = {
    where?: LoanWhereInput
    data: XOR<LoanUpdateWithoutRepaymentsInput, LoanUncheckedUpdateWithoutRepaymentsInput>
  }

  export type LoanUpdateWithoutRepaymentsInput = {
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLoansNestedInput
  }

  export type LoanUncheckedUpdateWithoutRepaymentsInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanCreateManyCustomerInput = {
    id?: string
    loanAmount: number
    interest: number
    amountGiven: number
    totalRepayment: number
    weeklyInstallment: number
    durationWeeks: number
    startDate?: Date | string
    status?: $Enums.LoanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanUpdateWithoutCustomerInput = {
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repayments?: RepaymentUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateWithoutCustomerInput = {
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repayments?: RepaymentUncheckedUpdateManyWithoutLoanNestedInput
  }

  export type LoanUncheckedUpdateManyWithoutCustomerInput = {
    loanAmount?: FloatFieldUpdateOperationsInput | number
    interest?: FloatFieldUpdateOperationsInput | number
    amountGiven?: FloatFieldUpdateOperationsInput | number
    totalRepayment?: FloatFieldUpdateOperationsInput | number
    weeklyInstallment?: FloatFieldUpdateOperationsInput | number
    durationWeeks?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLoanStatusFieldUpdateOperationsInput | $Enums.LoanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepaymentCreateManyLoanInput = {
    id?: string
    weekNumber: number
    amount: number
    paid?: boolean
    paidDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepaymentUpdateWithoutLoanInput = {
    weekNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepaymentUncheckedUpdateWithoutLoanInput = {
    weekNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepaymentUncheckedUpdateManyWithoutLoanInput = {
    weekNumber?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paid?: BoolFieldUpdateOperationsInput | boolean
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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