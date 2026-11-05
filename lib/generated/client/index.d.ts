
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = $Result.DefaultSelection<Prisma.$PharmacyPayload>
/**
 * Model PharmacyStaff
 * 
 */
export type PharmacyStaff = $Result.DefaultSelection<Prisma.$PharmacyStaffPayload>
/**
 * Model Courier
 * 
 */
export type Courier = $Result.DefaultSelection<Prisma.$CourierPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model PharmacyInventory
 * 
 */
export type PharmacyInventory = $Result.DefaultSelection<Prisma.$PharmacyInventoryPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model LabReport
 * 
 */
export type LabReport = $Result.DefaultSelection<Prisma.$LabReportPayload>
/**
 * Model ShortageRequest
 * 
 */
export type ShortageRequest = $Result.DefaultSelection<Prisma.$ShortageRequestPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Pharmacies
 * const pharmacies = await prisma.pharmacy.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Pharmacies
   * const pharmacies = await prisma.pharmacy.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacyStaff`: Exposes CRUD operations for the **PharmacyStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PharmacyStaffs
    * const pharmacyStaffs = await prisma.pharmacyStaff.findMany()
    * ```
    */
  get pharmacyStaff(): Prisma.PharmacyStaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courier`: Exposes CRUD operations for the **Courier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couriers
    * const couriers = await prisma.courier.findMany()
    * ```
    */
  get courier(): Prisma.CourierDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacyInventory`: Exposes CRUD operations for the **PharmacyInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PharmacyInventories
    * const pharmacyInventories = await prisma.pharmacyInventory.findMany()
    * ```
    */
  get pharmacyInventory(): Prisma.PharmacyInventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labReport`: Exposes CRUD operations for the **LabReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabReports
    * const labReports = await prisma.labReport.findMany()
    * ```
    */
  get labReport(): Prisma.LabReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shortageRequest`: Exposes CRUD operations for the **ShortageRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShortageRequests
    * const shortageRequests = await prisma.shortageRequest.findMany()
    * ```
    */
  get shortageRequest(): Prisma.ShortageRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Pharmacy: 'Pharmacy',
    PharmacyStaff: 'PharmacyStaff',
    Courier: 'Courier',
    Customer: 'Customer',
    Medicine: 'Medicine',
    PharmacyInventory: 'PharmacyInventory',
    Prescription: 'Prescription',
    LabReport: 'LabReport',
    ShortageRequest: 'ShortageRequest',
    Order: 'Order'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pharmacy" | "pharmacyStaff" | "courier" | "customer" | "medicine" | "pharmacyInventory" | "prescription" | "labReport" | "shortageRequest" | "order"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pharmacy: {
        payload: Prisma.$PharmacyPayload<ExtArgs>
        fields: Prisma.PharmacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findFirst: {
            args: Prisma.PharmacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findMany: {
            args: Prisma.PharmacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          create: {
            args: Prisma.PharmacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          createMany: {
            args: Prisma.PharmacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          delete: {
            args: Prisma.PharmacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          update: {
            args: Prisma.PharmacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          upsert: {
            args: Prisma.PharmacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          aggregate: {
            args: Prisma.PharmacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacy>
          }
          groupBy: {
            args: Prisma.PharmacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyCountAggregateOutputType> | number
          }
        }
      }
      PharmacyStaff: {
        payload: Prisma.$PharmacyStaffPayload<ExtArgs>
        fields: Prisma.PharmacyStaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyStaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyStaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>
          }
          findFirst: {
            args: Prisma.PharmacyStaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyStaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>
          }
          findMany: {
            args: Prisma.PharmacyStaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>[]
          }
          create: {
            args: Prisma.PharmacyStaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>
          }
          createMany: {
            args: Prisma.PharmacyStaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyStaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>[]
          }
          delete: {
            args: Prisma.PharmacyStaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>
          }
          update: {
            args: Prisma.PharmacyStaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyStaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyStaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacyStaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>[]
          }
          upsert: {
            args: Prisma.PharmacyStaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyStaffPayload>
          }
          aggregate: {
            args: Prisma.PharmacyStaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacyStaff>
          }
          groupBy: {
            args: Prisma.PharmacyStaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyStaffCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyStaffCountAggregateOutputType> | number
          }
        }
      }
      Courier: {
        payload: Prisma.$CourierPayload<ExtArgs>
        fields: Prisma.CourierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          findFirst: {
            args: Prisma.CourierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          findMany: {
            args: Prisma.CourierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>[]
          }
          create: {
            args: Prisma.CourierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          createMany: {
            args: Prisma.CourierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>[]
          }
          delete: {
            args: Prisma.CourierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          update: {
            args: Prisma.CourierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          deleteMany: {
            args: Prisma.CourierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>[]
          }
          upsert: {
            args: Prisma.CourierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          aggregate: {
            args: Prisma.CourierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourier>
          }
          groupBy: {
            args: Prisma.CourierGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourierGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourierCountArgs<ExtArgs>
            result: $Utils.Optional<CourierCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
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
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      PharmacyInventory: {
        payload: Prisma.$PharmacyInventoryPayload<ExtArgs>
        fields: Prisma.PharmacyInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>
          }
          findFirst: {
            args: Prisma.PharmacyInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>
          }
          findMany: {
            args: Prisma.PharmacyInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>[]
          }
          create: {
            args: Prisma.PharmacyInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>
          }
          createMany: {
            args: Prisma.PharmacyInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>[]
          }
          delete: {
            args: Prisma.PharmacyInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>
          }
          update: {
            args: Prisma.PharmacyInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacyInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>[]
          }
          upsert: {
            args: Prisma.PharmacyInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyInventoryPayload>
          }
          aggregate: {
            args: Prisma.PharmacyInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacyInventory>
          }
          groupBy: {
            args: Prisma.PharmacyInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyInventoryCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      LabReport: {
        payload: Prisma.$LabReportPayload<ExtArgs>
        fields: Prisma.LabReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          findFirst: {
            args: Prisma.LabReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          findMany: {
            args: Prisma.LabReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>[]
          }
          create: {
            args: Prisma.LabReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          createMany: {
            args: Prisma.LabReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>[]
          }
          delete: {
            args: Prisma.LabReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          update: {
            args: Prisma.LabReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          deleteMany: {
            args: Prisma.LabReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>[]
          }
          upsert: {
            args: Prisma.LabReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabReportPayload>
          }
          aggregate: {
            args: Prisma.LabReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabReport>
          }
          groupBy: {
            args: Prisma.LabReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabReportCountArgs<ExtArgs>
            result: $Utils.Optional<LabReportCountAggregateOutputType> | number
          }
        }
      }
      ShortageRequest: {
        payload: Prisma.$ShortageRequestPayload<ExtArgs>
        fields: Prisma.ShortageRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShortageRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShortageRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>
          }
          findFirst: {
            args: Prisma.ShortageRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShortageRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>
          }
          findMany: {
            args: Prisma.ShortageRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>[]
          }
          create: {
            args: Prisma.ShortageRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>
          }
          createMany: {
            args: Prisma.ShortageRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShortageRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>[]
          }
          delete: {
            args: Prisma.ShortageRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>
          }
          update: {
            args: Prisma.ShortageRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>
          }
          deleteMany: {
            args: Prisma.ShortageRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShortageRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShortageRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>[]
          }
          upsert: {
            args: Prisma.ShortageRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortageRequestPayload>
          }
          aggregate: {
            args: Prisma.ShortageRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortageRequest>
          }
          groupBy: {
            args: Prisma.ShortageRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortageRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShortageRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ShortageRequestCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    pharmacy?: PharmacyOmit
    pharmacyStaff?: PharmacyStaffOmit
    courier?: CourierOmit
    customer?: CustomerOmit
    medicine?: MedicineOmit
    pharmacyInventory?: PharmacyInventoryOmit
    prescription?: PrescriptionOmit
    labReport?: LabReportOmit
    shortageRequest?: ShortageRequestOmit
    order?: OrderOmit
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
   * Count Type PharmacyCountOutputType
   */

  export type PharmacyCountOutputType = {
    staff: number
    inventory: number
    couriers: number
    orders: number
    prescriptions: number
  }

  export type PharmacyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | PharmacyCountOutputTypeCountStaffArgs
    inventory?: boolean | PharmacyCountOutputTypeCountInventoryArgs
    couriers?: boolean | PharmacyCountOutputTypeCountCouriersArgs
    orders?: boolean | PharmacyCountOutputTypeCountOrdersArgs
    prescriptions?: boolean | PharmacyCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyCountOutputType
     */
    select?: PharmacyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyStaffWhereInput
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyInventoryWhereInput
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountCouriersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type CourierCountOutputType
   */

  export type CourierCountOutputType = {
    orders: number
  }

  export type CourierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CourierCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CourierCountOutputType without action
   */
  export type CourierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierCountOutputType
     */
    select?: CourierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourierCountOutputType without action
   */
  export type CourierCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
    prescriptions: number
    labReports: number
    shortageRequests: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
    prescriptions?: boolean | CustomerCountOutputTypeCountPrescriptionsArgs
    labReports?: boolean | CustomerCountOutputTypeCountLabReportsArgs
    shortageRequests?: boolean | CustomerCountOutputTypeCountShortageRequestsArgs
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
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountLabReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabReportWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountShortageRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortageRequestWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    inventory: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | MedicineCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyInventoryWhereInput
  }


  /**
   * Count Type PrescriptionCountOutputType
   */

  export type PrescriptionCountOutputType = {
    orders: number
  }

  export type PrescriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | PrescriptionCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionCountOutputType
     */
    select?: PrescriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ShortageRequestCountOutputType
   */

  export type ShortageRequestCountOutputType = {
    orders: number
  }

  export type ShortageRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ShortageRequestCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ShortageRequestCountOutputType without action
   */
  export type ShortageRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequestCountOutputType
     */
    select?: ShortageRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShortageRequestCountOutputType without action
   */
  export type ShortageRequestCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pharmacy
   */

  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    rating: number | null
    deliveryFee: number | null
  }

  export type PharmacySumAggregateOutputType = {
    lat: number | null
    lng: number | null
    rating: number | null
    deliveryFee: number | null
  }

  export type PharmacyMinAggregateOutputType = {
    id: string | null
    slug: string | null
    nameAr: string | null
    nameEn: string | null
    licenseNumber: string | null
    ownerName: string | null
    phone: string | null
    whatsapp: string | null
    email: string | null
    address: string | null
    city: string | null
    governorate: string | null
    lat: number | null
    lng: number | null
    logoUrl: string | null
    coverUrl: string | null
    rating: number | null
    isOpen: boolean | null
    deliveryAvailable: boolean | null
    deliveryFee: number | null
    deliveryTimeEstimate: string | null
    workingHours: string | null
    isVerified: boolean | null
    subscriptionPlan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PharmacyMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    nameAr: string | null
    nameEn: string | null
    licenseNumber: string | null
    ownerName: string | null
    phone: string | null
    whatsapp: string | null
    email: string | null
    address: string | null
    city: string | null
    governorate: string | null
    lat: number | null
    lng: number | null
    logoUrl: string | null
    coverUrl: string | null
    rating: number | null
    isOpen: boolean | null
    deliveryAvailable: boolean | null
    deliveryFee: number | null
    deliveryTimeEstimate: string | null
    workingHours: string | null
    isVerified: boolean | null
    subscriptionPlan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PharmacyCountAggregateOutputType = {
    id: number
    slug: number
    nameAr: number
    nameEn: number
    licenseNumber: number
    ownerName: number
    phone: number
    whatsapp: number
    email: number
    address: number
    city: number
    governorate: number
    lat: number
    lng: number
    logoUrl: number
    coverUrl: number
    rating: number
    isOpen: number
    deliveryAvailable: number
    deliveryFee: number
    deliveryTimeEstimate: number
    workingHours: number
    isVerified: number
    subscriptionPlan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PharmacyAvgAggregateInputType = {
    lat?: true
    lng?: true
    rating?: true
    deliveryFee?: true
  }

  export type PharmacySumAggregateInputType = {
    lat?: true
    lng?: true
    rating?: true
    deliveryFee?: true
  }

  export type PharmacyMinAggregateInputType = {
    id?: true
    slug?: true
    nameAr?: true
    nameEn?: true
    licenseNumber?: true
    ownerName?: true
    phone?: true
    whatsapp?: true
    email?: true
    address?: true
    city?: true
    governorate?: true
    lat?: true
    lng?: true
    logoUrl?: true
    coverUrl?: true
    rating?: true
    isOpen?: true
    deliveryAvailable?: true
    deliveryFee?: true
    deliveryTimeEstimate?: true
    workingHours?: true
    isVerified?: true
    subscriptionPlan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PharmacyMaxAggregateInputType = {
    id?: true
    slug?: true
    nameAr?: true
    nameEn?: true
    licenseNumber?: true
    ownerName?: true
    phone?: true
    whatsapp?: true
    email?: true
    address?: true
    city?: true
    governorate?: true
    lat?: true
    lng?: true
    logoUrl?: true
    coverUrl?: true
    rating?: true
    isOpen?: true
    deliveryAvailable?: true
    deliveryFee?: true
    deliveryTimeEstimate?: true
    workingHours?: true
    isVerified?: true
    subscriptionPlan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PharmacyCountAggregateInputType = {
    id?: true
    slug?: true
    nameAr?: true
    nameEn?: true
    licenseNumber?: true
    ownerName?: true
    phone?: true
    whatsapp?: true
    email?: true
    address?: true
    city?: true
    governorate?: true
    lat?: true
    lng?: true
    logoUrl?: true
    coverUrl?: true
    rating?: true
    isOpen?: true
    deliveryAvailable?: true
    deliveryFee?: true
    deliveryTimeEstimate?: true
    workingHours?: true
    isVerified?: true
    subscriptionPlan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PharmacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmacyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmacySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithAggregationInput | PharmacyOrderByWithAggregationInput[]
    by: PharmacyScalarFieldEnum[] | PharmacyScalarFieldEnum
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _avg?: PharmacyAvgAggregateInputType
    _sum?: PharmacySumAggregateInputType
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }

  export type PharmacyGroupByOutputType = {
    id: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email: string | null
    address: string
    city: string
    governorate: string
    lat: number | null
    lng: number | null
    logoUrl: string | null
    coverUrl: string | null
    rating: number
    isOpen: boolean
    deliveryAvailable: boolean
    deliveryFee: number
    deliveryTimeEstimate: string
    workingHours: string
    isVerified: boolean
    subscriptionPlan: string
    createdAt: Date
    updatedAt: Date
    _count: PharmacyCountAggregateOutputType | null
    _avg: PharmacyAvgAggregateOutputType | null
    _sum: PharmacySumAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nameAr?: boolean
    nameEn?: boolean
    licenseNumber?: boolean
    ownerName?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    governorate?: boolean
    lat?: boolean
    lng?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    rating?: boolean
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: boolean
    deliveryTimeEstimate?: boolean
    workingHours?: boolean
    isVerified?: boolean
    subscriptionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    staff?: boolean | Pharmacy$staffArgs<ExtArgs>
    inventory?: boolean | Pharmacy$inventoryArgs<ExtArgs>
    couriers?: boolean | Pharmacy$couriersArgs<ExtArgs>
    orders?: boolean | Pharmacy$ordersArgs<ExtArgs>
    prescriptions?: boolean | Pharmacy$prescriptionsArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nameAr?: boolean
    nameEn?: boolean
    licenseNumber?: boolean
    ownerName?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    governorate?: boolean
    lat?: boolean
    lng?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    rating?: boolean
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: boolean
    deliveryTimeEstimate?: boolean
    workingHours?: boolean
    isVerified?: boolean
    subscriptionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nameAr?: boolean
    nameEn?: boolean
    licenseNumber?: boolean
    ownerName?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    governorate?: boolean
    lat?: boolean
    lng?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    rating?: boolean
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: boolean
    deliveryTimeEstimate?: boolean
    workingHours?: boolean
    isVerified?: boolean
    subscriptionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectScalar = {
    id?: boolean
    slug?: boolean
    nameAr?: boolean
    nameEn?: boolean
    licenseNumber?: boolean
    ownerName?: boolean
    phone?: boolean
    whatsapp?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    governorate?: boolean
    lat?: boolean
    lng?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    rating?: boolean
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: boolean
    deliveryTimeEstimate?: boolean
    workingHours?: boolean
    isVerified?: boolean
    subscriptionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PharmacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "nameAr" | "nameEn" | "licenseNumber" | "ownerName" | "phone" | "whatsapp" | "email" | "address" | "city" | "governorate" | "lat" | "lng" | "logoUrl" | "coverUrl" | "rating" | "isOpen" | "deliveryAvailable" | "deliveryFee" | "deliveryTimeEstimate" | "workingHours" | "isVerified" | "subscriptionPlan" | "createdAt" | "updatedAt", ExtArgs["result"]["pharmacy"]>
  export type PharmacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | Pharmacy$staffArgs<ExtArgs>
    inventory?: boolean | Pharmacy$inventoryArgs<ExtArgs>
    couriers?: boolean | Pharmacy$couriersArgs<ExtArgs>
    orders?: boolean | Pharmacy$ordersArgs<ExtArgs>
    prescriptions?: boolean | Pharmacy$prescriptionsArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PharmacyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PharmacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacy"
    objects: {
      staff: Prisma.$PharmacyStaffPayload<ExtArgs>[]
      inventory: Prisma.$PharmacyInventoryPayload<ExtArgs>[]
      couriers: Prisma.$CourierPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      nameAr: string
      nameEn: string
      licenseNumber: string | null
      ownerName: string
      phone: string
      whatsapp: string
      email: string | null
      address: string
      city: string
      governorate: string
      lat: number | null
      lng: number | null
      logoUrl: string | null
      coverUrl: string | null
      rating: number
      isOpen: boolean
      deliveryAvailable: boolean
      deliveryFee: number
      deliveryTimeEstimate: string
      workingHours: string
      isVerified: boolean
      subscriptionPlan: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pharmacy"]>
    composites: {}
  }

  type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyDefaultArgs> = $Result.GetResult<Prisma.$PharmacyPayload, S>

  type PharmacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacy'], meta: { name: 'Pharmacy' } }
    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyFindUniqueArgs>(args: SelectSubset<T, PharmacyFindUniqueArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyFindFirstArgs>(args?: SelectSubset<T, PharmacyFindFirstArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyFindManyArgs>(args?: SelectSubset<T, PharmacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
     */
    create<T extends PharmacyCreateArgs>(args: SelectSubset<T, PharmacyCreateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacies.
     * @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyCreateManyArgs>(args?: SelectSubset<T, PharmacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacies and returns the data saved in the database.
     * @param {PharmacyCreateManyAndReturnArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
     */
    delete<T extends PharmacyDeleteArgs>(args: SelectSubset<T, PharmacyDeleteArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyUpdateArgs>(args: SelectSubset<T, PharmacyUpdateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyDeleteManyArgs>(args?: SelectSubset<T, PharmacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyUpdateManyArgs>(args: SelectSubset<T, PharmacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies and returns the data updated in the database.
     * @param {PharmacyUpdateManyAndReturnArgs} args - Arguments to update many Pharmacies.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.updateManyAndReturn({
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
    updateManyAndReturn<T extends PharmacyUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyUpsertArgs>(args: SelectSubset<T, PharmacyUpsertArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
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
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacy model
   */
  readonly fields: PharmacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends Pharmacy$staffArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Pharmacy$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    couriers<T extends Pharmacy$couriersArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$couriersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Pharmacy$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Pharmacy$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pharmacy model
   */
  interface PharmacyFieldRefs {
    readonly id: FieldRef<"Pharmacy", 'String'>
    readonly slug: FieldRef<"Pharmacy", 'String'>
    readonly nameAr: FieldRef<"Pharmacy", 'String'>
    readonly nameEn: FieldRef<"Pharmacy", 'String'>
    readonly licenseNumber: FieldRef<"Pharmacy", 'String'>
    readonly ownerName: FieldRef<"Pharmacy", 'String'>
    readonly phone: FieldRef<"Pharmacy", 'String'>
    readonly whatsapp: FieldRef<"Pharmacy", 'String'>
    readonly email: FieldRef<"Pharmacy", 'String'>
    readonly address: FieldRef<"Pharmacy", 'String'>
    readonly city: FieldRef<"Pharmacy", 'String'>
    readonly governorate: FieldRef<"Pharmacy", 'String'>
    readonly lat: FieldRef<"Pharmacy", 'Float'>
    readonly lng: FieldRef<"Pharmacy", 'Float'>
    readonly logoUrl: FieldRef<"Pharmacy", 'String'>
    readonly coverUrl: FieldRef<"Pharmacy", 'String'>
    readonly rating: FieldRef<"Pharmacy", 'Float'>
    readonly isOpen: FieldRef<"Pharmacy", 'Boolean'>
    readonly deliveryAvailable: FieldRef<"Pharmacy", 'Boolean'>
    readonly deliveryFee: FieldRef<"Pharmacy", 'Float'>
    readonly deliveryTimeEstimate: FieldRef<"Pharmacy", 'String'>
    readonly workingHours: FieldRef<"Pharmacy", 'String'>
    readonly isVerified: FieldRef<"Pharmacy", 'Boolean'>
    readonly subscriptionPlan: FieldRef<"Pharmacy", 'String'>
    readonly createdAt: FieldRef<"Pharmacy", 'DateTime'>
    readonly updatedAt: FieldRef<"Pharmacy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacy findUnique
   */
  export type PharmacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findFirst
   */
  export type PharmacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }

  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy createManyAndReturn
   */
  export type PharmacyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy updateManyAndReturn
   */
  export type PharmacyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }

  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to delete.
     */
    limit?: number
  }

  /**
   * Pharmacy.staff
   */
  export type Pharmacy$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    where?: PharmacyStaffWhereInput
    orderBy?: PharmacyStaffOrderByWithRelationInput | PharmacyStaffOrderByWithRelationInput[]
    cursor?: PharmacyStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PharmacyStaffScalarFieldEnum | PharmacyStaffScalarFieldEnum[]
  }

  /**
   * Pharmacy.inventory
   */
  export type Pharmacy$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    where?: PharmacyInventoryWhereInput
    orderBy?: PharmacyInventoryOrderByWithRelationInput | PharmacyInventoryOrderByWithRelationInput[]
    cursor?: PharmacyInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PharmacyInventoryScalarFieldEnum | PharmacyInventoryScalarFieldEnum[]
  }

  /**
   * Pharmacy.couriers
   */
  export type Pharmacy$couriersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    cursor?: CourierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }

  /**
   * Pharmacy.orders
   */
  export type Pharmacy$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Pharmacy.prescriptions
   */
  export type Pharmacy$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Pharmacy without action
   */
  export type PharmacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
  }


  /**
   * Model PharmacyStaff
   */

  export type AggregatePharmacyStaff = {
    _count: PharmacyStaffCountAggregateOutputType | null
    _min: PharmacyStaffMinAggregateOutputType | null
    _max: PharmacyStaffMaxAggregateOutputType | null
  }

  export type PharmacyStaffMinAggregateOutputType = {
    id: string | null
    pharmacyId: string | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
    phone: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type PharmacyStaffMaxAggregateOutputType = {
    id: string | null
    pharmacyId: string | null
    name: string | null
    username: string | null
    password: string | null
    role: string | null
    phone: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type PharmacyStaffCountAggregateOutputType = {
    id: number
    pharmacyId: number
    name: number
    username: number
    password: number
    role: number
    phone: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type PharmacyStaffMinAggregateInputType = {
    id?: true
    pharmacyId?: true
    name?: true
    username?: true
    password?: true
    role?: true
    phone?: true
    isActive?: true
    createdAt?: true
  }

  export type PharmacyStaffMaxAggregateInputType = {
    id?: true
    pharmacyId?: true
    name?: true
    username?: true
    password?: true
    role?: true
    phone?: true
    isActive?: true
    createdAt?: true
  }

  export type PharmacyStaffCountAggregateInputType = {
    id?: true
    pharmacyId?: true
    name?: true
    username?: true
    password?: true
    role?: true
    phone?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type PharmacyStaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmacyStaff to aggregate.
     */
    where?: PharmacyStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyStaffs to fetch.
     */
    orderBy?: PharmacyStaffOrderByWithRelationInput | PharmacyStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PharmacyStaffs
    **/
    _count?: true | PharmacyStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyStaffMaxAggregateInputType
  }

  export type GetPharmacyStaffAggregateType<T extends PharmacyStaffAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacyStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacyStaff[P]>
      : GetScalarType<T[P], AggregatePharmacyStaff[P]>
  }




  export type PharmacyStaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyStaffWhereInput
    orderBy?: PharmacyStaffOrderByWithAggregationInput | PharmacyStaffOrderByWithAggregationInput[]
    by: PharmacyStaffScalarFieldEnum[] | PharmacyStaffScalarFieldEnum
    having?: PharmacyStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyStaffCountAggregateInputType | true
    _min?: PharmacyStaffMinAggregateInputType
    _max?: PharmacyStaffMaxAggregateInputType
  }

  export type PharmacyStaffGroupByOutputType = {
    id: string
    pharmacyId: string
    name: string
    username: string
    password: string
    role: string
    phone: string | null
    isActive: boolean
    createdAt: Date
    _count: PharmacyStaffCountAggregateOutputType | null
    _min: PharmacyStaffMinAggregateOutputType | null
    _max: PharmacyStaffMaxAggregateOutputType | null
  }

  type GetPharmacyStaffGroupByPayload<T extends PharmacyStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyStaffGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyStaffGroupByOutputType[P]>
        }
      >
    >


  export type PharmacyStaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyStaff"]>

  export type PharmacyStaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyStaff"]>

  export type PharmacyStaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyStaff"]>

  export type PharmacyStaffSelectScalar = {
    id?: boolean
    pharmacyId?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type PharmacyStaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pharmacyId" | "name" | "username" | "password" | "role" | "phone" | "isActive" | "createdAt", ExtArgs["result"]["pharmacyStaff"]>
  export type PharmacyStaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }
  export type PharmacyStaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }
  export type PharmacyStaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }

  export type $PharmacyStaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PharmacyStaff"
    objects: {
      pharmacy: Prisma.$PharmacyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pharmacyId: string
      name: string
      username: string
      password: string
      role: string
      phone: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["pharmacyStaff"]>
    composites: {}
  }

  type PharmacyStaffGetPayload<S extends boolean | null | undefined | PharmacyStaffDefaultArgs> = $Result.GetResult<Prisma.$PharmacyStaffPayload, S>

  type PharmacyStaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyStaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyStaffCountAggregateInputType | true
    }

  export interface PharmacyStaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PharmacyStaff'], meta: { name: 'PharmacyStaff' } }
    /**
     * Find zero or one PharmacyStaff that matches the filter.
     * @param {PharmacyStaffFindUniqueArgs} args - Arguments to find a PharmacyStaff
     * @example
     * // Get one PharmacyStaff
     * const pharmacyStaff = await prisma.pharmacyStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyStaffFindUniqueArgs>(args: SelectSubset<T, PharmacyStaffFindUniqueArgs<ExtArgs>>): Prisma__PharmacyStaffClient<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PharmacyStaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyStaffFindUniqueOrThrowArgs} args - Arguments to find a PharmacyStaff
     * @example
     * // Get one PharmacyStaff
     * const pharmacyStaff = await prisma.pharmacyStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyStaffFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyStaffClient<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PharmacyStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyStaffFindFirstArgs} args - Arguments to find a PharmacyStaff
     * @example
     * // Get one PharmacyStaff
     * const pharmacyStaff = await prisma.pharmacyStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyStaffFindFirstArgs>(args?: SelectSubset<T, PharmacyStaffFindFirstArgs<ExtArgs>>): Prisma__PharmacyStaffClient<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PharmacyStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyStaffFindFirstOrThrowArgs} args - Arguments to find a PharmacyStaff
     * @example
     * // Get one PharmacyStaff
     * const pharmacyStaff = await prisma.pharmacyStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyStaffFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyStaffClient<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PharmacyStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PharmacyStaffs
     * const pharmacyStaffs = await prisma.pharmacyStaff.findMany()
     * 
     * // Get first 10 PharmacyStaffs
     * const pharmacyStaffs = await prisma.pharmacyStaff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyStaffWithIdOnly = await prisma.pharmacyStaff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyStaffFindManyArgs>(args?: SelectSubset<T, PharmacyStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PharmacyStaff.
     * @param {PharmacyStaffCreateArgs} args - Arguments to create a PharmacyStaff.
     * @example
     * // Create one PharmacyStaff
     * const PharmacyStaff = await prisma.pharmacyStaff.create({
     *   data: {
     *     // ... data to create a PharmacyStaff
     *   }
     * })
     * 
     */
    create<T extends PharmacyStaffCreateArgs>(args: SelectSubset<T, PharmacyStaffCreateArgs<ExtArgs>>): Prisma__PharmacyStaffClient<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PharmacyStaffs.
     * @param {PharmacyStaffCreateManyArgs} args - Arguments to create many PharmacyStaffs.
     * @example
     * // Create many PharmacyStaffs
     * const pharmacyStaff = await prisma.pharmacyStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyStaffCreateManyArgs>(args?: SelectSubset<T, PharmacyStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PharmacyStaffs and returns the data saved in the database.
     * @param {PharmacyStaffCreateManyAndReturnArgs} args - Arguments to create many PharmacyStaffs.
     * @example
     * // Create many PharmacyStaffs
     * const pharmacyStaff = await prisma.pharmacyStaff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PharmacyStaffs and only return the `id`
     * const pharmacyStaffWithIdOnly = await prisma.pharmacyStaff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyStaffCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyStaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PharmacyStaff.
     * @param {PharmacyStaffDeleteArgs} args - Arguments to delete one PharmacyStaff.
     * @example
     * // Delete one PharmacyStaff
     * const PharmacyStaff = await prisma.pharmacyStaff.delete({
     *   where: {
     *     // ... filter to delete one PharmacyStaff
     *   }
     * })
     * 
     */
    delete<T extends PharmacyStaffDeleteArgs>(args: SelectSubset<T, PharmacyStaffDeleteArgs<ExtArgs>>): Prisma__PharmacyStaffClient<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PharmacyStaff.
     * @param {PharmacyStaffUpdateArgs} args - Arguments to update one PharmacyStaff.
     * @example
     * // Update one PharmacyStaff
     * const pharmacyStaff = await prisma.pharmacyStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyStaffUpdateArgs>(args: SelectSubset<T, PharmacyStaffUpdateArgs<ExtArgs>>): Prisma__PharmacyStaffClient<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PharmacyStaffs.
     * @param {PharmacyStaffDeleteManyArgs} args - Arguments to filter PharmacyStaffs to delete.
     * @example
     * // Delete a few PharmacyStaffs
     * const { count } = await prisma.pharmacyStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyStaffDeleteManyArgs>(args?: SelectSubset<T, PharmacyStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmacyStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PharmacyStaffs
     * const pharmacyStaff = await prisma.pharmacyStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyStaffUpdateManyArgs>(args: SelectSubset<T, PharmacyStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmacyStaffs and returns the data updated in the database.
     * @param {PharmacyStaffUpdateManyAndReturnArgs} args - Arguments to update many PharmacyStaffs.
     * @example
     * // Update many PharmacyStaffs
     * const pharmacyStaff = await prisma.pharmacyStaff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PharmacyStaffs and only return the `id`
     * const pharmacyStaffWithIdOnly = await prisma.pharmacyStaff.updateManyAndReturn({
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
    updateManyAndReturn<T extends PharmacyStaffUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacyStaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PharmacyStaff.
     * @param {PharmacyStaffUpsertArgs} args - Arguments to update or create a PharmacyStaff.
     * @example
     * // Update or create a PharmacyStaff
     * const pharmacyStaff = await prisma.pharmacyStaff.upsert({
     *   create: {
     *     // ... data to create a PharmacyStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PharmacyStaff we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyStaffUpsertArgs>(args: SelectSubset<T, PharmacyStaffUpsertArgs<ExtArgs>>): Prisma__PharmacyStaffClient<$Result.GetResult<Prisma.$PharmacyStaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PharmacyStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyStaffCountArgs} args - Arguments to filter PharmacyStaffs to count.
     * @example
     * // Count the number of PharmacyStaffs
     * const count = await prisma.pharmacyStaff.count({
     *   where: {
     *     // ... the filter for the PharmacyStaffs we want to count
     *   }
     * })
    **/
    count<T extends PharmacyStaffCountArgs>(
      args?: Subset<T, PharmacyStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PharmacyStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmacyStaffAggregateArgs>(args: Subset<T, PharmacyStaffAggregateArgs>): Prisma.PrismaPromise<GetPharmacyStaffAggregateType<T>>

    /**
     * Group by PharmacyStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyStaffGroupByArgs} args - Group by arguments.
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
      T extends PharmacyStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyStaffGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyStaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmacyStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PharmacyStaff model
   */
  readonly fields: PharmacyStaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PharmacyStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyStaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacy<T extends PharmacyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmacyDefaultArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PharmacyStaff model
   */
  interface PharmacyStaffFieldRefs {
    readonly id: FieldRef<"PharmacyStaff", 'String'>
    readonly pharmacyId: FieldRef<"PharmacyStaff", 'String'>
    readonly name: FieldRef<"PharmacyStaff", 'String'>
    readonly username: FieldRef<"PharmacyStaff", 'String'>
    readonly password: FieldRef<"PharmacyStaff", 'String'>
    readonly role: FieldRef<"PharmacyStaff", 'String'>
    readonly phone: FieldRef<"PharmacyStaff", 'String'>
    readonly isActive: FieldRef<"PharmacyStaff", 'Boolean'>
    readonly createdAt: FieldRef<"PharmacyStaff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PharmacyStaff findUnique
   */
  export type PharmacyStaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyStaff to fetch.
     */
    where: PharmacyStaffWhereUniqueInput
  }

  /**
   * PharmacyStaff findUniqueOrThrow
   */
  export type PharmacyStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyStaff to fetch.
     */
    where: PharmacyStaffWhereUniqueInput
  }

  /**
   * PharmacyStaff findFirst
   */
  export type PharmacyStaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyStaff to fetch.
     */
    where?: PharmacyStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyStaffs to fetch.
     */
    orderBy?: PharmacyStaffOrderByWithRelationInput | PharmacyStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmacyStaffs.
     */
    cursor?: PharmacyStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyStaffs.
     */
    distinct?: PharmacyStaffScalarFieldEnum | PharmacyStaffScalarFieldEnum[]
  }

  /**
   * PharmacyStaff findFirstOrThrow
   */
  export type PharmacyStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyStaff to fetch.
     */
    where?: PharmacyStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyStaffs to fetch.
     */
    orderBy?: PharmacyStaffOrderByWithRelationInput | PharmacyStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmacyStaffs.
     */
    cursor?: PharmacyStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyStaffs.
     */
    distinct?: PharmacyStaffScalarFieldEnum | PharmacyStaffScalarFieldEnum[]
  }

  /**
   * PharmacyStaff findMany
   */
  export type PharmacyStaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyStaffs to fetch.
     */
    where?: PharmacyStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyStaffs to fetch.
     */
    orderBy?: PharmacyStaffOrderByWithRelationInput | PharmacyStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PharmacyStaffs.
     */
    cursor?: PharmacyStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyStaffs.
     */
    distinct?: PharmacyStaffScalarFieldEnum | PharmacyStaffScalarFieldEnum[]
  }

  /**
   * PharmacyStaff create
   */
  export type PharmacyStaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * The data needed to create a PharmacyStaff.
     */
    data: XOR<PharmacyStaffCreateInput, PharmacyStaffUncheckedCreateInput>
  }

  /**
   * PharmacyStaff createMany
   */
  export type PharmacyStaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PharmacyStaffs.
     */
    data: PharmacyStaffCreateManyInput | PharmacyStaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PharmacyStaff createManyAndReturn
   */
  export type PharmacyStaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * The data used to create many PharmacyStaffs.
     */
    data: PharmacyStaffCreateManyInput | PharmacyStaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PharmacyStaff update
   */
  export type PharmacyStaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * The data needed to update a PharmacyStaff.
     */
    data: XOR<PharmacyStaffUpdateInput, PharmacyStaffUncheckedUpdateInput>
    /**
     * Choose, which PharmacyStaff to update.
     */
    where: PharmacyStaffWhereUniqueInput
  }

  /**
   * PharmacyStaff updateMany
   */
  export type PharmacyStaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PharmacyStaffs.
     */
    data: XOR<PharmacyStaffUpdateManyMutationInput, PharmacyStaffUncheckedUpdateManyInput>
    /**
     * Filter which PharmacyStaffs to update
     */
    where?: PharmacyStaffWhereInput
    /**
     * Limit how many PharmacyStaffs to update.
     */
    limit?: number
  }

  /**
   * PharmacyStaff updateManyAndReturn
   */
  export type PharmacyStaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * The data used to update PharmacyStaffs.
     */
    data: XOR<PharmacyStaffUpdateManyMutationInput, PharmacyStaffUncheckedUpdateManyInput>
    /**
     * Filter which PharmacyStaffs to update
     */
    where?: PharmacyStaffWhereInput
    /**
     * Limit how many PharmacyStaffs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PharmacyStaff upsert
   */
  export type PharmacyStaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * The filter to search for the PharmacyStaff to update in case it exists.
     */
    where: PharmacyStaffWhereUniqueInput
    /**
     * In case the PharmacyStaff found by the `where` argument doesn't exist, create a new PharmacyStaff with this data.
     */
    create: XOR<PharmacyStaffCreateInput, PharmacyStaffUncheckedCreateInput>
    /**
     * In case the PharmacyStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyStaffUpdateInput, PharmacyStaffUncheckedUpdateInput>
  }

  /**
   * PharmacyStaff delete
   */
  export type PharmacyStaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
    /**
     * Filter which PharmacyStaff to delete.
     */
    where: PharmacyStaffWhereUniqueInput
  }

  /**
   * PharmacyStaff deleteMany
   */
  export type PharmacyStaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmacyStaffs to delete
     */
    where?: PharmacyStaffWhereInput
    /**
     * Limit how many PharmacyStaffs to delete.
     */
    limit?: number
  }

  /**
   * PharmacyStaff without action
   */
  export type PharmacyStaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyStaff
     */
    select?: PharmacyStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyStaff
     */
    omit?: PharmacyStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyStaffInclude<ExtArgs> | null
  }


  /**
   * Model Courier
   */

  export type AggregateCourier = {
    _count: CourierCountAggregateOutputType | null
    _avg: CourierAvgAggregateOutputType | null
    _sum: CourierSumAggregateOutputType | null
    _min: CourierMinAggregateOutputType | null
    _max: CourierMaxAggregateOutputType | null
  }

  export type CourierAvgAggregateOutputType = {
    currentLat: number | null
    currentLng: number | null
    totalOrders: number | null
  }

  export type CourierSumAggregateOutputType = {
    currentLat: number | null
    currentLng: number | null
    totalOrders: number | null
  }

  export type CourierMinAggregateOutputType = {
    id: string | null
    pharmacyId: string | null
    name: string | null
    phone: string | null
    vehicleType: string | null
    isAvailable: boolean | null
    currentLat: number | null
    currentLng: number | null
    totalOrders: number | null
    createdAt: Date | null
  }

  export type CourierMaxAggregateOutputType = {
    id: string | null
    pharmacyId: string | null
    name: string | null
    phone: string | null
    vehicleType: string | null
    isAvailable: boolean | null
    currentLat: number | null
    currentLng: number | null
    totalOrders: number | null
    createdAt: Date | null
  }

  export type CourierCountAggregateOutputType = {
    id: number
    pharmacyId: number
    name: number
    phone: number
    vehicleType: number
    isAvailable: number
    currentLat: number
    currentLng: number
    totalOrders: number
    createdAt: number
    _all: number
  }


  export type CourierAvgAggregateInputType = {
    currentLat?: true
    currentLng?: true
    totalOrders?: true
  }

  export type CourierSumAggregateInputType = {
    currentLat?: true
    currentLng?: true
    totalOrders?: true
  }

  export type CourierMinAggregateInputType = {
    id?: true
    pharmacyId?: true
    name?: true
    phone?: true
    vehicleType?: true
    isAvailable?: true
    currentLat?: true
    currentLng?: true
    totalOrders?: true
    createdAt?: true
  }

  export type CourierMaxAggregateInputType = {
    id?: true
    pharmacyId?: true
    name?: true
    phone?: true
    vehicleType?: true
    isAvailable?: true
    currentLat?: true
    currentLng?: true
    totalOrders?: true
    createdAt?: true
  }

  export type CourierCountAggregateInputType = {
    id?: true
    pharmacyId?: true
    name?: true
    phone?: true
    vehicleType?: true
    isAvailable?: true
    currentLat?: true
    currentLng?: true
    totalOrders?: true
    createdAt?: true
    _all?: true
  }

  export type CourierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courier to aggregate.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couriers
    **/
    _count?: true | CourierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourierMaxAggregateInputType
  }

  export type GetCourierAggregateType<T extends CourierAggregateArgs> = {
        [P in keyof T & keyof AggregateCourier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourier[P]>
      : GetScalarType<T[P], AggregateCourier[P]>
  }




  export type CourierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithAggregationInput | CourierOrderByWithAggregationInput[]
    by: CourierScalarFieldEnum[] | CourierScalarFieldEnum
    having?: CourierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourierCountAggregateInputType | true
    _avg?: CourierAvgAggregateInputType
    _sum?: CourierSumAggregateInputType
    _min?: CourierMinAggregateInputType
    _max?: CourierMaxAggregateInputType
  }

  export type CourierGroupByOutputType = {
    id: string
    pharmacyId: string
    name: string
    phone: string
    vehicleType: string
    isAvailable: boolean
    currentLat: number | null
    currentLng: number | null
    totalOrders: number
    createdAt: Date
    _count: CourierCountAggregateOutputType | null
    _avg: CourierAvgAggregateOutputType | null
    _sum: CourierSumAggregateOutputType | null
    _min: CourierMinAggregateOutputType | null
    _max: CourierMaxAggregateOutputType | null
  }

  type GetCourierGroupByPayload<T extends CourierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourierGroupByOutputType[P]>
            : GetScalarType<T[P], CourierGroupByOutputType[P]>
        }
      >
    >


  export type CourierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    name?: boolean
    phone?: boolean
    vehicleType?: boolean
    isAvailable?: boolean
    currentLat?: boolean
    currentLng?: boolean
    totalOrders?: boolean
    createdAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    orders?: boolean | Courier$ordersArgs<ExtArgs>
    _count?: boolean | CourierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courier"]>

  export type CourierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    name?: boolean
    phone?: boolean
    vehicleType?: boolean
    isAvailable?: boolean
    currentLat?: boolean
    currentLng?: boolean
    totalOrders?: boolean
    createdAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courier"]>

  export type CourierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    name?: boolean
    phone?: boolean
    vehicleType?: boolean
    isAvailable?: boolean
    currentLat?: boolean
    currentLng?: boolean
    totalOrders?: boolean
    createdAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courier"]>

  export type CourierSelectScalar = {
    id?: boolean
    pharmacyId?: boolean
    name?: boolean
    phone?: boolean
    vehicleType?: boolean
    isAvailable?: boolean
    currentLat?: boolean
    currentLng?: boolean
    totalOrders?: boolean
    createdAt?: boolean
  }

  export type CourierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pharmacyId" | "name" | "phone" | "vehicleType" | "isAvailable" | "currentLat" | "currentLng" | "totalOrders" | "createdAt", ExtArgs["result"]["courier"]>
  export type CourierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    orders?: boolean | Courier$ordersArgs<ExtArgs>
    _count?: boolean | CourierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }
  export type CourierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }

  export type $CourierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courier"
    objects: {
      pharmacy: Prisma.$PharmacyPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pharmacyId: string
      name: string
      phone: string
      vehicleType: string
      isAvailable: boolean
      currentLat: number | null
      currentLng: number | null
      totalOrders: number
      createdAt: Date
    }, ExtArgs["result"]["courier"]>
    composites: {}
  }

  type CourierGetPayload<S extends boolean | null | undefined | CourierDefaultArgs> = $Result.GetResult<Prisma.$CourierPayload, S>

  type CourierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourierCountAggregateInputType | true
    }

  export interface CourierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courier'], meta: { name: 'Courier' } }
    /**
     * Find zero or one Courier that matches the filter.
     * @param {CourierFindUniqueArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourierFindUniqueArgs>(args: SelectSubset<T, CourierFindUniqueArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourierFindUniqueOrThrowArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourierFindUniqueOrThrowArgs>(args: SelectSubset<T, CourierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindFirstArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourierFindFirstArgs>(args?: SelectSubset<T, CourierFindFirstArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindFirstOrThrowArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourierFindFirstOrThrowArgs>(args?: SelectSubset<T, CourierFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Couriers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couriers
     * const couriers = await prisma.courier.findMany()
     * 
     * // Get first 10 Couriers
     * const couriers = await prisma.courier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courierWithIdOnly = await prisma.courier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourierFindManyArgs>(args?: SelectSubset<T, CourierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courier.
     * @param {CourierCreateArgs} args - Arguments to create a Courier.
     * @example
     * // Create one Courier
     * const Courier = await prisma.courier.create({
     *   data: {
     *     // ... data to create a Courier
     *   }
     * })
     * 
     */
    create<T extends CourierCreateArgs>(args: SelectSubset<T, CourierCreateArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Couriers.
     * @param {CourierCreateManyArgs} args - Arguments to create many Couriers.
     * @example
     * // Create many Couriers
     * const courier = await prisma.courier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourierCreateManyArgs>(args?: SelectSubset<T, CourierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Couriers and returns the data saved in the database.
     * @param {CourierCreateManyAndReturnArgs} args - Arguments to create many Couriers.
     * @example
     * // Create many Couriers
     * const courier = await prisma.courier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Couriers and only return the `id`
     * const courierWithIdOnly = await prisma.courier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourierCreateManyAndReturnArgs>(args?: SelectSubset<T, CourierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courier.
     * @param {CourierDeleteArgs} args - Arguments to delete one Courier.
     * @example
     * // Delete one Courier
     * const Courier = await prisma.courier.delete({
     *   where: {
     *     // ... filter to delete one Courier
     *   }
     * })
     * 
     */
    delete<T extends CourierDeleteArgs>(args: SelectSubset<T, CourierDeleteArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courier.
     * @param {CourierUpdateArgs} args - Arguments to update one Courier.
     * @example
     * // Update one Courier
     * const courier = await prisma.courier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourierUpdateArgs>(args: SelectSubset<T, CourierUpdateArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Couriers.
     * @param {CourierDeleteManyArgs} args - Arguments to filter Couriers to delete.
     * @example
     * // Delete a few Couriers
     * const { count } = await prisma.courier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourierDeleteManyArgs>(args?: SelectSubset<T, CourierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couriers
     * const courier = await prisma.courier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourierUpdateManyArgs>(args: SelectSubset<T, CourierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couriers and returns the data updated in the database.
     * @param {CourierUpdateManyAndReturnArgs} args - Arguments to update many Couriers.
     * @example
     * // Update many Couriers
     * const courier = await prisma.courier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Couriers and only return the `id`
     * const courierWithIdOnly = await prisma.courier.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourierUpdateManyAndReturnArgs>(args: SelectSubset<T, CourierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courier.
     * @param {CourierUpsertArgs} args - Arguments to update or create a Courier.
     * @example
     * // Update or create a Courier
     * const courier = await prisma.courier.upsert({
     *   create: {
     *     // ... data to create a Courier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courier we want to update
     *   }
     * })
     */
    upsert<T extends CourierUpsertArgs>(args: SelectSubset<T, CourierUpsertArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Couriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierCountArgs} args - Arguments to filter Couriers to count.
     * @example
     * // Count the number of Couriers
     * const count = await prisma.courier.count({
     *   where: {
     *     // ... the filter for the Couriers we want to count
     *   }
     * })
    **/
    count<T extends CourierCountArgs>(
      args?: Subset<T, CourierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourierAggregateArgs>(args: Subset<T, CourierAggregateArgs>): Prisma.PrismaPromise<GetCourierAggregateType<T>>

    /**
     * Group by Courier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierGroupByArgs} args - Group by arguments.
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
      T extends CourierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourierGroupByArgs['orderBy'] }
        : { orderBy?: CourierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courier model
   */
  readonly fields: CourierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacy<T extends PharmacyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmacyDefaultArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Courier$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Courier$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Courier model
   */
  interface CourierFieldRefs {
    readonly id: FieldRef<"Courier", 'String'>
    readonly pharmacyId: FieldRef<"Courier", 'String'>
    readonly name: FieldRef<"Courier", 'String'>
    readonly phone: FieldRef<"Courier", 'String'>
    readonly vehicleType: FieldRef<"Courier", 'String'>
    readonly isAvailable: FieldRef<"Courier", 'Boolean'>
    readonly currentLat: FieldRef<"Courier", 'Float'>
    readonly currentLng: FieldRef<"Courier", 'Float'>
    readonly totalOrders: FieldRef<"Courier", 'Int'>
    readonly createdAt: FieldRef<"Courier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Courier findUnique
   */
  export type CourierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where: CourierWhereUniqueInput
  }

  /**
   * Courier findUniqueOrThrow
   */
  export type CourierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where: CourierWhereUniqueInput
  }

  /**
   * Courier findFirst
   */
  export type CourierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }

  /**
   * Courier findFirstOrThrow
   */
  export type CourierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }

  /**
   * Courier findMany
   */
  export type CourierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Couriers to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }

  /**
   * Courier create
   */
  export type CourierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The data needed to create a Courier.
     */
    data: XOR<CourierCreateInput, CourierUncheckedCreateInput>
  }

  /**
   * Courier createMany
   */
  export type CourierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Couriers.
     */
    data: CourierCreateManyInput | CourierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courier createManyAndReturn
   */
  export type CourierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * The data used to create many Couriers.
     */
    data: CourierCreateManyInput | CourierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courier update
   */
  export type CourierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The data needed to update a Courier.
     */
    data: XOR<CourierUpdateInput, CourierUncheckedUpdateInput>
    /**
     * Choose, which Courier to update.
     */
    where: CourierWhereUniqueInput
  }

  /**
   * Courier updateMany
   */
  export type CourierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Couriers.
     */
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyInput>
    /**
     * Filter which Couriers to update
     */
    where?: CourierWhereInput
    /**
     * Limit how many Couriers to update.
     */
    limit?: number
  }

  /**
   * Courier updateManyAndReturn
   */
  export type CourierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * The data used to update Couriers.
     */
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyInput>
    /**
     * Filter which Couriers to update
     */
    where?: CourierWhereInput
    /**
     * Limit how many Couriers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courier upsert
   */
  export type CourierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The filter to search for the Courier to update in case it exists.
     */
    where: CourierWhereUniqueInput
    /**
     * In case the Courier found by the `where` argument doesn't exist, create a new Courier with this data.
     */
    create: XOR<CourierCreateInput, CourierUncheckedCreateInput>
    /**
     * In case the Courier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourierUpdateInput, CourierUncheckedUpdateInput>
  }

  /**
   * Courier delete
   */
  export type CourierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter which Courier to delete.
     */
    where: CourierWhereUniqueInput
  }

  /**
   * Courier deleteMany
   */
  export type CourierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couriers to delete
     */
    where?: CourierWhereInput
    /**
     * Limit how many Couriers to delete.
     */
    limit?: number
  }

  /**
   * Courier.orders
   */
  export type Courier$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Courier without action
   */
  export type CourierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    totalOrders: number | null
  }

  export type CustomerSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    totalOrders: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    city: string | null
    address: string | null
    lat: number | null
    lng: number | null
    allergies: string | null
    chronicDiseases: string | null
    totalOrders: number | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    city: string | null
    address: string | null
    lat: number | null
    lng: number | null
    allergies: string | null
    chronicDiseases: string | null
    totalOrders: number | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    city: number
    address: number
    lat: number
    lng: number
    allergies: number
    chronicDiseases: number
    totalOrders: number
    createdAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    lat?: true
    lng?: true
    totalOrders?: true
  }

  export type CustomerSumAggregateInputType = {
    lat?: true
    lng?: true
    totalOrders?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    city?: true
    address?: true
    lat?: true
    lng?: true
    allergies?: true
    chronicDiseases?: true
    totalOrders?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    city?: true
    address?: true
    lat?: true
    lng?: true
    allergies?: true
    chronicDiseases?: true
    totalOrders?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    city?: true
    address?: true
    lat?: true
    lng?: true
    allergies?: true
    chronicDiseases?: true
    totalOrders?: true
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
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
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
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string
    city: string | null
    address: string | null
    lat: number | null
    lng: number | null
    allergies: string | null
    chronicDiseases: string | null
    totalOrders: number
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
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
    city?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    allergies?: boolean
    chronicDiseases?: boolean
    totalOrders?: boolean
    createdAt?: boolean
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    prescriptions?: boolean | Customer$prescriptionsArgs<ExtArgs>
    labReports?: boolean | Customer$labReportsArgs<ExtArgs>
    shortageRequests?: boolean | Customer$shortageRequestsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    allergies?: boolean
    chronicDiseases?: boolean
    totalOrders?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    allergies?: boolean
    chronicDiseases?: boolean
    totalOrders?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    city?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    allergies?: boolean
    chronicDiseases?: boolean
    totalOrders?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "city" | "address" | "lat" | "lng" | "allergies" | "chronicDiseases" | "totalOrders" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    prescriptions?: boolean | Customer$prescriptionsArgs<ExtArgs>
    labReports?: boolean | Customer$labReportsArgs<ExtArgs>
    shortageRequests?: boolean | Customer$shortageRequestsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
      labReports: Prisma.$LabReportPayload<ExtArgs>[]
      shortageRequests: Prisma.$ShortageRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      city: string | null
      address: string | null
      lat: number | null
      lng: number | null
      allergies: string | null
      chronicDiseases: string | null
      totalOrders: number
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Customer$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labReports<T extends Customer$labReportsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$labReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shortageRequests<T extends Customer$shortageRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$shortageRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly city: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly lat: FieldRef<"Customer", 'Float'>
    readonly lng: FieldRef<"Customer", 'Float'>
    readonly allergies: FieldRef<"Customer", 'String'>
    readonly chronicDiseases: FieldRef<"Customer", 'String'>
    readonly totalOrders: FieldRef<"Customer", 'Int'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
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
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
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
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
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
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer.prescriptions
   */
  export type Customer$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Customer.labReports
   */
  export type Customer$labReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    where?: LabReportWhereInput
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    cursor?: LabReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabReportScalarFieldEnum | LabReportScalarFieldEnum[]
  }

  /**
   * Customer.shortageRequests
   */
  export type Customer$shortageRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    where?: ShortageRequestWhereInput
    orderBy?: ShortageRequestOrderByWithRelationInput | ShortageRequestOrderByWithRelationInput[]
    cursor?: ShortageRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShortageRequestScalarFieldEnum | ShortageRequestScalarFieldEnum[]
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
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    officialPrice: number | null
  }

  export type MedicineSumAggregateOutputType = {
    officialPrice: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: string | null
    tradeNameAr: string | null
    tradeNameEn: string | null
    genericName: string | null
    strength: string | null
    dosageForm: string | null
    category: string | null
    officialPrice: number | null
    manufacturer: string | null
    barcode: string | null
    image: string | null
    requiresPrescription: boolean | null
    isShortage: boolean | null
    alternatives: string | null
    description: string | null
    createdAt: Date | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: string | null
    tradeNameAr: string | null
    tradeNameEn: string | null
    genericName: string | null
    strength: string | null
    dosageForm: string | null
    category: string | null
    officialPrice: number | null
    manufacturer: string | null
    barcode: string | null
    image: string | null
    requiresPrescription: boolean | null
    isShortage: boolean | null
    alternatives: string | null
    description: string | null
    createdAt: Date | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    tradeNameAr: number
    tradeNameEn: number
    genericName: number
    strength: number
    dosageForm: number
    category: number
    officialPrice: number
    manufacturer: number
    barcode: number
    image: number
    requiresPrescription: number
    isShortage: number
    alternatives: number
    description: number
    createdAt: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    officialPrice?: true
  }

  export type MedicineSumAggregateInputType = {
    officialPrice?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    tradeNameAr?: true
    tradeNameEn?: true
    genericName?: true
    strength?: true
    dosageForm?: true
    category?: true
    officialPrice?: true
    manufacturer?: true
    barcode?: true
    image?: true
    requiresPrescription?: true
    isShortage?: true
    alternatives?: true
    description?: true
    createdAt?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    tradeNameAr?: true
    tradeNameEn?: true
    genericName?: true
    strength?: true
    dosageForm?: true
    category?: true
    officialPrice?: true
    manufacturer?: true
    barcode?: true
    image?: true
    requiresPrescription?: true
    isShortage?: true
    alternatives?: true
    description?: true
    createdAt?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    tradeNameAr?: true
    tradeNameEn?: true
    genericName?: true
    strength?: true
    dosageForm?: true
    category?: true
    officialPrice?: true
    manufacturer?: true
    barcode?: true
    image?: true
    requiresPrescription?: true
    isShortage?: true
    alternatives?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: string
    tradeNameAr: string
    tradeNameEn: string
    genericName: string
    strength: string | null
    dosageForm: string
    category: string
    officialPrice: number
    manufacturer: string | null
    barcode: string | null
    image: string | null
    requiresPrescription: boolean
    isShortage: boolean
    alternatives: string | null
    description: string | null
    createdAt: Date
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeNameAr?: boolean
    tradeNameEn?: boolean
    genericName?: boolean
    strength?: boolean
    dosageForm?: boolean
    category?: boolean
    officialPrice?: boolean
    manufacturer?: boolean
    barcode?: boolean
    image?: boolean
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: boolean
    description?: boolean
    createdAt?: boolean
    inventory?: boolean | Medicine$inventoryArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeNameAr?: boolean
    tradeNameEn?: boolean
    genericName?: boolean
    strength?: boolean
    dosageForm?: boolean
    category?: boolean
    officialPrice?: boolean
    manufacturer?: boolean
    barcode?: boolean
    image?: boolean
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeNameAr?: boolean
    tradeNameEn?: boolean
    genericName?: boolean
    strength?: boolean
    dosageForm?: boolean
    category?: boolean
    officialPrice?: boolean
    manufacturer?: boolean
    barcode?: boolean
    image?: boolean
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    tradeNameAr?: boolean
    tradeNameEn?: boolean
    genericName?: boolean
    strength?: boolean
    dosageForm?: boolean
    category?: boolean
    officialPrice?: boolean
    manufacturer?: boolean
    barcode?: boolean
    image?: boolean
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type MedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradeNameAr" | "tradeNameEn" | "genericName" | "strength" | "dosageForm" | "category" | "officialPrice" | "manufacturer" | "barcode" | "image" | "requiresPrescription" | "isShortage" | "alternatives" | "description" | "createdAt", ExtArgs["result"]["medicine"]>
  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | Medicine$inventoryArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      inventory: Prisma.$PharmacyInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tradeNameAr: string
      tradeNameEn: string
      genericName: string
      strength: string | null
      dosageForm: string
      category: string
      officialPrice: number
      manufacturer: string | null
      barcode: string | null
      image: string | null
      requiresPrescription: boolean
      isShortage: boolean
      alternatives: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicineUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
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
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends Medicine$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medicine model
   */
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'String'>
    readonly tradeNameAr: FieldRef<"Medicine", 'String'>
    readonly tradeNameEn: FieldRef<"Medicine", 'String'>
    readonly genericName: FieldRef<"Medicine", 'String'>
    readonly strength: FieldRef<"Medicine", 'String'>
    readonly dosageForm: FieldRef<"Medicine", 'String'>
    readonly category: FieldRef<"Medicine", 'String'>
    readonly officialPrice: FieldRef<"Medicine", 'Float'>
    readonly manufacturer: FieldRef<"Medicine", 'String'>
    readonly barcode: FieldRef<"Medicine", 'String'>
    readonly image: FieldRef<"Medicine", 'String'>
    readonly requiresPrescription: FieldRef<"Medicine", 'Boolean'>
    readonly isShortage: FieldRef<"Medicine", 'Boolean'>
    readonly alternatives: FieldRef<"Medicine", 'String'>
    readonly description: FieldRef<"Medicine", 'String'>
    readonly createdAt: FieldRef<"Medicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine updateManyAndReturn
   */
  export type MedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number
  }

  /**
   * Medicine.inventory
   */
  export type Medicine$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    where?: PharmacyInventoryWhereInput
    orderBy?: PharmacyInventoryOrderByWithRelationInput | PharmacyInventoryOrderByWithRelationInput[]
    cursor?: PharmacyInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PharmacyInventoryScalarFieldEnum | PharmacyInventoryScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model PharmacyInventory
   */

  export type AggregatePharmacyInventory = {
    _count: PharmacyInventoryCountAggregateOutputType | null
    _avg: PharmacyInventoryAvgAggregateOutputType | null
    _sum: PharmacyInventorySumAggregateOutputType | null
    _min: PharmacyInventoryMinAggregateOutputType | null
    _max: PharmacyInventoryMaxAggregateOutputType | null
  }

  export type PharmacyInventoryAvgAggregateOutputType = {
    stockQuantity: number | null
    price: number | null
  }

  export type PharmacyInventorySumAggregateOutputType = {
    stockQuantity: number | null
    price: number | null
  }

  export type PharmacyInventoryMinAggregateOutputType = {
    id: string | null
    pharmacyId: string | null
    medicineId: string | null
    stockQuantity: number | null
    price: number | null
    isAvailable: boolean | null
    expiryDate: string | null
    updatedAt: Date | null
  }

  export type PharmacyInventoryMaxAggregateOutputType = {
    id: string | null
    pharmacyId: string | null
    medicineId: string | null
    stockQuantity: number | null
    price: number | null
    isAvailable: boolean | null
    expiryDate: string | null
    updatedAt: Date | null
  }

  export type PharmacyInventoryCountAggregateOutputType = {
    id: number
    pharmacyId: number
    medicineId: number
    stockQuantity: number
    price: number
    isAvailable: number
    expiryDate: number
    updatedAt: number
    _all: number
  }


  export type PharmacyInventoryAvgAggregateInputType = {
    stockQuantity?: true
    price?: true
  }

  export type PharmacyInventorySumAggregateInputType = {
    stockQuantity?: true
    price?: true
  }

  export type PharmacyInventoryMinAggregateInputType = {
    id?: true
    pharmacyId?: true
    medicineId?: true
    stockQuantity?: true
    price?: true
    isAvailable?: true
    expiryDate?: true
    updatedAt?: true
  }

  export type PharmacyInventoryMaxAggregateInputType = {
    id?: true
    pharmacyId?: true
    medicineId?: true
    stockQuantity?: true
    price?: true
    isAvailable?: true
    expiryDate?: true
    updatedAt?: true
  }

  export type PharmacyInventoryCountAggregateInputType = {
    id?: true
    pharmacyId?: true
    medicineId?: true
    stockQuantity?: true
    price?: true
    isAvailable?: true
    expiryDate?: true
    updatedAt?: true
    _all?: true
  }

  export type PharmacyInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmacyInventory to aggregate.
     */
    where?: PharmacyInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyInventories to fetch.
     */
    orderBy?: PharmacyInventoryOrderByWithRelationInput | PharmacyInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PharmacyInventories
    **/
    _count?: true | PharmacyInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmacyInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmacyInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyInventoryMaxAggregateInputType
  }

  export type GetPharmacyInventoryAggregateType<T extends PharmacyInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacyInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacyInventory[P]>
      : GetScalarType<T[P], AggregatePharmacyInventory[P]>
  }




  export type PharmacyInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyInventoryWhereInput
    orderBy?: PharmacyInventoryOrderByWithAggregationInput | PharmacyInventoryOrderByWithAggregationInput[]
    by: PharmacyInventoryScalarFieldEnum[] | PharmacyInventoryScalarFieldEnum
    having?: PharmacyInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyInventoryCountAggregateInputType | true
    _avg?: PharmacyInventoryAvgAggregateInputType
    _sum?: PharmacyInventorySumAggregateInputType
    _min?: PharmacyInventoryMinAggregateInputType
    _max?: PharmacyInventoryMaxAggregateInputType
  }

  export type PharmacyInventoryGroupByOutputType = {
    id: string
    pharmacyId: string
    medicineId: string
    stockQuantity: number
    price: number
    isAvailable: boolean
    expiryDate: string | null
    updatedAt: Date
    _count: PharmacyInventoryCountAggregateOutputType | null
    _avg: PharmacyInventoryAvgAggregateOutputType | null
    _sum: PharmacyInventorySumAggregateOutputType | null
    _min: PharmacyInventoryMinAggregateOutputType | null
    _max: PharmacyInventoryMaxAggregateOutputType | null
  }

  type GetPharmacyInventoryGroupByPayload<T extends PharmacyInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyInventoryGroupByOutputType[P]>
        }
      >
    >


  export type PharmacyInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    medicineId?: boolean
    stockQuantity?: boolean
    price?: boolean
    isAvailable?: boolean
    expiryDate?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyInventory"]>

  export type PharmacyInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    medicineId?: boolean
    stockQuantity?: boolean
    price?: boolean
    isAvailable?: boolean
    expiryDate?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyInventory"]>

  export type PharmacyInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    medicineId?: boolean
    stockQuantity?: boolean
    price?: boolean
    isAvailable?: boolean
    expiryDate?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyInventory"]>

  export type PharmacyInventorySelectScalar = {
    id?: boolean
    pharmacyId?: boolean
    medicineId?: boolean
    stockQuantity?: boolean
    price?: boolean
    isAvailable?: boolean
    expiryDate?: boolean
    updatedAt?: boolean
  }

  export type PharmacyInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pharmacyId" | "medicineId" | "stockQuantity" | "price" | "isAvailable" | "expiryDate" | "updatedAt", ExtArgs["result"]["pharmacyInventory"]>
  export type PharmacyInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type PharmacyInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type PharmacyInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $PharmacyInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PharmacyInventory"
    objects: {
      pharmacy: Prisma.$PharmacyPayload<ExtArgs>
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pharmacyId: string
      medicineId: string
      stockQuantity: number
      price: number
      isAvailable: boolean
      expiryDate: string | null
      updatedAt: Date
    }, ExtArgs["result"]["pharmacyInventory"]>
    composites: {}
  }

  type PharmacyInventoryGetPayload<S extends boolean | null | undefined | PharmacyInventoryDefaultArgs> = $Result.GetResult<Prisma.$PharmacyInventoryPayload, S>

  type PharmacyInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyInventoryCountAggregateInputType | true
    }

  export interface PharmacyInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PharmacyInventory'], meta: { name: 'PharmacyInventory' } }
    /**
     * Find zero or one PharmacyInventory that matches the filter.
     * @param {PharmacyInventoryFindUniqueArgs} args - Arguments to find a PharmacyInventory
     * @example
     * // Get one PharmacyInventory
     * const pharmacyInventory = await prisma.pharmacyInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyInventoryFindUniqueArgs>(args: SelectSubset<T, PharmacyInventoryFindUniqueArgs<ExtArgs>>): Prisma__PharmacyInventoryClient<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PharmacyInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyInventoryFindUniqueOrThrowArgs} args - Arguments to find a PharmacyInventory
     * @example
     * // Get one PharmacyInventory
     * const pharmacyInventory = await prisma.pharmacyInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyInventoryClient<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PharmacyInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyInventoryFindFirstArgs} args - Arguments to find a PharmacyInventory
     * @example
     * // Get one PharmacyInventory
     * const pharmacyInventory = await prisma.pharmacyInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyInventoryFindFirstArgs>(args?: SelectSubset<T, PharmacyInventoryFindFirstArgs<ExtArgs>>): Prisma__PharmacyInventoryClient<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PharmacyInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyInventoryFindFirstOrThrowArgs} args - Arguments to find a PharmacyInventory
     * @example
     * // Get one PharmacyInventory
     * const pharmacyInventory = await prisma.pharmacyInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyInventoryClient<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PharmacyInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PharmacyInventories
     * const pharmacyInventories = await prisma.pharmacyInventory.findMany()
     * 
     * // Get first 10 PharmacyInventories
     * const pharmacyInventories = await prisma.pharmacyInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyInventoryWithIdOnly = await prisma.pharmacyInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyInventoryFindManyArgs>(args?: SelectSubset<T, PharmacyInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PharmacyInventory.
     * @param {PharmacyInventoryCreateArgs} args - Arguments to create a PharmacyInventory.
     * @example
     * // Create one PharmacyInventory
     * const PharmacyInventory = await prisma.pharmacyInventory.create({
     *   data: {
     *     // ... data to create a PharmacyInventory
     *   }
     * })
     * 
     */
    create<T extends PharmacyInventoryCreateArgs>(args: SelectSubset<T, PharmacyInventoryCreateArgs<ExtArgs>>): Prisma__PharmacyInventoryClient<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PharmacyInventories.
     * @param {PharmacyInventoryCreateManyArgs} args - Arguments to create many PharmacyInventories.
     * @example
     * // Create many PharmacyInventories
     * const pharmacyInventory = await prisma.pharmacyInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyInventoryCreateManyArgs>(args?: SelectSubset<T, PharmacyInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PharmacyInventories and returns the data saved in the database.
     * @param {PharmacyInventoryCreateManyAndReturnArgs} args - Arguments to create many PharmacyInventories.
     * @example
     * // Create many PharmacyInventories
     * const pharmacyInventory = await prisma.pharmacyInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PharmacyInventories and only return the `id`
     * const pharmacyInventoryWithIdOnly = await prisma.pharmacyInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PharmacyInventory.
     * @param {PharmacyInventoryDeleteArgs} args - Arguments to delete one PharmacyInventory.
     * @example
     * // Delete one PharmacyInventory
     * const PharmacyInventory = await prisma.pharmacyInventory.delete({
     *   where: {
     *     // ... filter to delete one PharmacyInventory
     *   }
     * })
     * 
     */
    delete<T extends PharmacyInventoryDeleteArgs>(args: SelectSubset<T, PharmacyInventoryDeleteArgs<ExtArgs>>): Prisma__PharmacyInventoryClient<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PharmacyInventory.
     * @param {PharmacyInventoryUpdateArgs} args - Arguments to update one PharmacyInventory.
     * @example
     * // Update one PharmacyInventory
     * const pharmacyInventory = await prisma.pharmacyInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyInventoryUpdateArgs>(args: SelectSubset<T, PharmacyInventoryUpdateArgs<ExtArgs>>): Prisma__PharmacyInventoryClient<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PharmacyInventories.
     * @param {PharmacyInventoryDeleteManyArgs} args - Arguments to filter PharmacyInventories to delete.
     * @example
     * // Delete a few PharmacyInventories
     * const { count } = await prisma.pharmacyInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyInventoryDeleteManyArgs>(args?: SelectSubset<T, PharmacyInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmacyInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PharmacyInventories
     * const pharmacyInventory = await prisma.pharmacyInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyInventoryUpdateManyArgs>(args: SelectSubset<T, PharmacyInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmacyInventories and returns the data updated in the database.
     * @param {PharmacyInventoryUpdateManyAndReturnArgs} args - Arguments to update many PharmacyInventories.
     * @example
     * // Update many PharmacyInventories
     * const pharmacyInventory = await prisma.pharmacyInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PharmacyInventories and only return the `id`
     * const pharmacyInventoryWithIdOnly = await prisma.pharmacyInventory.updateManyAndReturn({
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
    updateManyAndReturn<T extends PharmacyInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacyInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PharmacyInventory.
     * @param {PharmacyInventoryUpsertArgs} args - Arguments to update or create a PharmacyInventory.
     * @example
     * // Update or create a PharmacyInventory
     * const pharmacyInventory = await prisma.pharmacyInventory.upsert({
     *   create: {
     *     // ... data to create a PharmacyInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PharmacyInventory we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyInventoryUpsertArgs>(args: SelectSubset<T, PharmacyInventoryUpsertArgs<ExtArgs>>): Prisma__PharmacyInventoryClient<$Result.GetResult<Prisma.$PharmacyInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PharmacyInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyInventoryCountArgs} args - Arguments to filter PharmacyInventories to count.
     * @example
     * // Count the number of PharmacyInventories
     * const count = await prisma.pharmacyInventory.count({
     *   where: {
     *     // ... the filter for the PharmacyInventories we want to count
     *   }
     * })
    **/
    count<T extends PharmacyInventoryCountArgs>(
      args?: Subset<T, PharmacyInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PharmacyInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmacyInventoryAggregateArgs>(args: Subset<T, PharmacyInventoryAggregateArgs>): Prisma.PrismaPromise<GetPharmacyInventoryAggregateType<T>>

    /**
     * Group by PharmacyInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyInventoryGroupByArgs} args - Group by arguments.
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
      T extends PharmacyInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyInventoryGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmacyInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PharmacyInventory model
   */
  readonly fields: PharmacyInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PharmacyInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacy<T extends PharmacyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmacyDefaultArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PharmacyInventory model
   */
  interface PharmacyInventoryFieldRefs {
    readonly id: FieldRef<"PharmacyInventory", 'String'>
    readonly pharmacyId: FieldRef<"PharmacyInventory", 'String'>
    readonly medicineId: FieldRef<"PharmacyInventory", 'String'>
    readonly stockQuantity: FieldRef<"PharmacyInventory", 'Int'>
    readonly price: FieldRef<"PharmacyInventory", 'Float'>
    readonly isAvailable: FieldRef<"PharmacyInventory", 'Boolean'>
    readonly expiryDate: FieldRef<"PharmacyInventory", 'String'>
    readonly updatedAt: FieldRef<"PharmacyInventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PharmacyInventory findUnique
   */
  export type PharmacyInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyInventory to fetch.
     */
    where: PharmacyInventoryWhereUniqueInput
  }

  /**
   * PharmacyInventory findUniqueOrThrow
   */
  export type PharmacyInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyInventory to fetch.
     */
    where: PharmacyInventoryWhereUniqueInput
  }

  /**
   * PharmacyInventory findFirst
   */
  export type PharmacyInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyInventory to fetch.
     */
    where?: PharmacyInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyInventories to fetch.
     */
    orderBy?: PharmacyInventoryOrderByWithRelationInput | PharmacyInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmacyInventories.
     */
    cursor?: PharmacyInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyInventories.
     */
    distinct?: PharmacyInventoryScalarFieldEnum | PharmacyInventoryScalarFieldEnum[]
  }

  /**
   * PharmacyInventory findFirstOrThrow
   */
  export type PharmacyInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyInventory to fetch.
     */
    where?: PharmacyInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyInventories to fetch.
     */
    orderBy?: PharmacyInventoryOrderByWithRelationInput | PharmacyInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmacyInventories.
     */
    cursor?: PharmacyInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyInventories.
     */
    distinct?: PharmacyInventoryScalarFieldEnum | PharmacyInventoryScalarFieldEnum[]
  }

  /**
   * PharmacyInventory findMany
   */
  export type PharmacyInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyInventories to fetch.
     */
    where?: PharmacyInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyInventories to fetch.
     */
    orderBy?: PharmacyInventoryOrderByWithRelationInput | PharmacyInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PharmacyInventories.
     */
    cursor?: PharmacyInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyInventories.
     */
    distinct?: PharmacyInventoryScalarFieldEnum | PharmacyInventoryScalarFieldEnum[]
  }

  /**
   * PharmacyInventory create
   */
  export type PharmacyInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PharmacyInventory.
     */
    data: XOR<PharmacyInventoryCreateInput, PharmacyInventoryUncheckedCreateInput>
  }

  /**
   * PharmacyInventory createMany
   */
  export type PharmacyInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PharmacyInventories.
     */
    data: PharmacyInventoryCreateManyInput | PharmacyInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PharmacyInventory createManyAndReturn
   */
  export type PharmacyInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many PharmacyInventories.
     */
    data: PharmacyInventoryCreateManyInput | PharmacyInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PharmacyInventory update
   */
  export type PharmacyInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PharmacyInventory.
     */
    data: XOR<PharmacyInventoryUpdateInput, PharmacyInventoryUncheckedUpdateInput>
    /**
     * Choose, which PharmacyInventory to update.
     */
    where: PharmacyInventoryWhereUniqueInput
  }

  /**
   * PharmacyInventory updateMany
   */
  export type PharmacyInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PharmacyInventories.
     */
    data: XOR<PharmacyInventoryUpdateManyMutationInput, PharmacyInventoryUncheckedUpdateManyInput>
    /**
     * Filter which PharmacyInventories to update
     */
    where?: PharmacyInventoryWhereInput
    /**
     * Limit how many PharmacyInventories to update.
     */
    limit?: number
  }

  /**
   * PharmacyInventory updateManyAndReturn
   */
  export type PharmacyInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * The data used to update PharmacyInventories.
     */
    data: XOR<PharmacyInventoryUpdateManyMutationInput, PharmacyInventoryUncheckedUpdateManyInput>
    /**
     * Filter which PharmacyInventories to update
     */
    where?: PharmacyInventoryWhereInput
    /**
     * Limit how many PharmacyInventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PharmacyInventory upsert
   */
  export type PharmacyInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PharmacyInventory to update in case it exists.
     */
    where: PharmacyInventoryWhereUniqueInput
    /**
     * In case the PharmacyInventory found by the `where` argument doesn't exist, create a new PharmacyInventory with this data.
     */
    create: XOR<PharmacyInventoryCreateInput, PharmacyInventoryUncheckedCreateInput>
    /**
     * In case the PharmacyInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyInventoryUpdateInput, PharmacyInventoryUncheckedUpdateInput>
  }

  /**
   * PharmacyInventory delete
   */
  export type PharmacyInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
    /**
     * Filter which PharmacyInventory to delete.
     */
    where: PharmacyInventoryWhereUniqueInput
  }

  /**
   * PharmacyInventory deleteMany
   */
  export type PharmacyInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmacyInventories to delete
     */
    where?: PharmacyInventoryWhereInput
    /**
     * Limit how many PharmacyInventories to delete.
     */
    limit?: number
  }

  /**
   * PharmacyInventory without action
   */
  export type PharmacyInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyInventory
     */
    select?: PharmacyInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyInventory
     */
    omit?: PharmacyInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInventoryInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionAvgAggregateOutputType = {
    aiConfidence: number | null
  }

  export type PrescriptionSumAggregateOutputType = {
    aiConfidence: number | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    pharmacyId: string | null
    imageUrl: string | null
    rawOcrText: string | null
    parsedMedicines: string | null
    doctorSpecialty: string | null
    aiConfidence: number | null
    status: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    pharmacyId: string | null
    imageUrl: string | null
    rawOcrText: string | null
    parsedMedicines: string | null
    doctorSpecialty: string | null
    aiConfidence: number | null
    status: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    customerId: number
    pharmacyId: number
    imageUrl: number
    rawOcrText: number
    parsedMedicines: number
    doctorSpecialty: number
    aiConfidence: number
    status: number
    notes: number
    createdAt: number
    _all: number
  }


  export type PrescriptionAvgAggregateInputType = {
    aiConfidence?: true
  }

  export type PrescriptionSumAggregateInputType = {
    aiConfidence?: true
  }

  export type PrescriptionMinAggregateInputType = {
    id?: true
    customerId?: true
    pharmacyId?: true
    imageUrl?: true
    rawOcrText?: true
    parsedMedicines?: true
    doctorSpecialty?: true
    aiConfidence?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    customerId?: true
    pharmacyId?: true
    imageUrl?: true
    rawOcrText?: true
    parsedMedicines?: true
    doctorSpecialty?: true
    aiConfidence?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    customerId?: true
    pharmacyId?: true
    imageUrl?: true
    rawOcrText?: true
    parsedMedicines?: true
    doctorSpecialty?: true
    aiConfidence?: true
    status?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _avg?: PrescriptionAvgAggregateInputType
    _sum?: PrescriptionSumAggregateInputType
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    customerId: string | null
    pharmacyId: string | null
    imageUrl: string
    rawOcrText: string | null
    parsedMedicines: string
    doctorSpecialty: string | null
    aiConfidence: number
    status: string
    notes: string | null
    createdAt: Date
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    pharmacyId?: boolean
    imageUrl?: boolean
    rawOcrText?: boolean
    parsedMedicines?: boolean
    doctorSpecialty?: boolean
    aiConfidence?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    customer?: boolean | Prescription$customerArgs<ExtArgs>
    pharmacy?: boolean | Prescription$pharmacyArgs<ExtArgs>
    orders?: boolean | Prescription$ordersArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    pharmacyId?: boolean
    imageUrl?: boolean
    rawOcrText?: boolean
    parsedMedicines?: boolean
    doctorSpecialty?: boolean
    aiConfidence?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    customer?: boolean | Prescription$customerArgs<ExtArgs>
    pharmacy?: boolean | Prescription$pharmacyArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    pharmacyId?: boolean
    imageUrl?: boolean
    rawOcrText?: boolean
    parsedMedicines?: boolean
    doctorSpecialty?: boolean
    aiConfidence?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    customer?: boolean | Prescription$customerArgs<ExtArgs>
    pharmacy?: boolean | Prescription$pharmacyArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    customerId?: boolean
    pharmacyId?: boolean
    imageUrl?: boolean
    rawOcrText?: boolean
    parsedMedicines?: boolean
    doctorSpecialty?: boolean
    aiConfidence?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "pharmacyId" | "imageUrl" | "rawOcrText" | "parsedMedicines" | "doctorSpecialty" | "aiConfidence" | "status" | "notes" | "createdAt", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Prescription$customerArgs<ExtArgs>
    pharmacy?: boolean | Prescription$pharmacyArgs<ExtArgs>
    orders?: boolean | Prescription$ordersArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Prescription$customerArgs<ExtArgs>
    pharmacy?: boolean | Prescription$pharmacyArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Prescription$customerArgs<ExtArgs>
    pharmacy?: boolean | Prescription$pharmacyArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      pharmacy: Prisma.$PharmacyPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string | null
      pharmacyId: string | null
      imageUrl: string
      rawOcrText: string | null
      parsedMedicines: string
      doctorSpecialty: string | null
      aiConfidence: number
      status: string
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Prescription$customerArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pharmacy<T extends Prescription$pharmacyArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$pharmacyArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Prescription$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly customerId: FieldRef<"Prescription", 'String'>
    readonly pharmacyId: FieldRef<"Prescription", 'String'>
    readonly imageUrl: FieldRef<"Prescription", 'String'>
    readonly rawOcrText: FieldRef<"Prescription", 'String'>
    readonly parsedMedicines: FieldRef<"Prescription", 'String'>
    readonly doctorSpecialty: FieldRef<"Prescription", 'String'>
    readonly aiConfidence: FieldRef<"Prescription", 'Float'>
    readonly status: FieldRef<"Prescription", 'String'>
    readonly notes: FieldRef<"Prescription", 'String'>
    readonly createdAt: FieldRef<"Prescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.customer
   */
  export type Prescription$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CustomerWhereInput
  }

  /**
   * Prescription.pharmacy
   */
  export type Prescription$pharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
  }

  /**
   * Prescription.orders
   */
  export type Prescription$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model LabReport
   */

  export type AggregateLabReport = {
    _count: LabReportCountAggregateOutputType | null
    _min: LabReportMinAggregateOutputType | null
    _max: LabReportMaxAggregateOutputType | null
  }

  export type LabReportMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    imageUrl: string | null
    testType: string | null
    rawOcrText: string | null
    simplifiedAnalysisAr: string | null
    abnormalValues: string | null
    doctorAdviceQuestions: string | null
    suggestedVitamins: string | null
    createdAt: Date | null
  }

  export type LabReportMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    imageUrl: string | null
    testType: string | null
    rawOcrText: string | null
    simplifiedAnalysisAr: string | null
    abnormalValues: string | null
    doctorAdviceQuestions: string | null
    suggestedVitamins: string | null
    createdAt: Date | null
  }

  export type LabReportCountAggregateOutputType = {
    id: number
    customerId: number
    imageUrl: number
    testType: number
    rawOcrText: number
    simplifiedAnalysisAr: number
    abnormalValues: number
    doctorAdviceQuestions: number
    suggestedVitamins: number
    createdAt: number
    _all: number
  }


  export type LabReportMinAggregateInputType = {
    id?: true
    customerId?: true
    imageUrl?: true
    testType?: true
    rawOcrText?: true
    simplifiedAnalysisAr?: true
    abnormalValues?: true
    doctorAdviceQuestions?: true
    suggestedVitamins?: true
    createdAt?: true
  }

  export type LabReportMaxAggregateInputType = {
    id?: true
    customerId?: true
    imageUrl?: true
    testType?: true
    rawOcrText?: true
    simplifiedAnalysisAr?: true
    abnormalValues?: true
    doctorAdviceQuestions?: true
    suggestedVitamins?: true
    createdAt?: true
  }

  export type LabReportCountAggregateInputType = {
    id?: true
    customerId?: true
    imageUrl?: true
    testType?: true
    rawOcrText?: true
    simplifiedAnalysisAr?: true
    abnormalValues?: true
    doctorAdviceQuestions?: true
    suggestedVitamins?: true
    createdAt?: true
    _all?: true
  }

  export type LabReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabReport to aggregate.
     */
    where?: LabReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabReports to fetch.
     */
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabReports
    **/
    _count?: true | LabReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabReportMaxAggregateInputType
  }

  export type GetLabReportAggregateType<T extends LabReportAggregateArgs> = {
        [P in keyof T & keyof AggregateLabReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabReport[P]>
      : GetScalarType<T[P], AggregateLabReport[P]>
  }




  export type LabReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabReportWhereInput
    orderBy?: LabReportOrderByWithAggregationInput | LabReportOrderByWithAggregationInput[]
    by: LabReportScalarFieldEnum[] | LabReportScalarFieldEnum
    having?: LabReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabReportCountAggregateInputType | true
    _min?: LabReportMinAggregateInputType
    _max?: LabReportMaxAggregateInputType
  }

  export type LabReportGroupByOutputType = {
    id: string
    customerId: string | null
    imageUrl: string
    testType: string
    rawOcrText: string | null
    simplifiedAnalysisAr: string
    abnormalValues: string
    doctorAdviceQuestions: string | null
    suggestedVitamins: string | null
    createdAt: Date
    _count: LabReportCountAggregateOutputType | null
    _min: LabReportMinAggregateOutputType | null
    _max: LabReportMaxAggregateOutputType | null
  }

  type GetLabReportGroupByPayload<T extends LabReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabReportGroupByOutputType[P]>
            : GetScalarType<T[P], LabReportGroupByOutputType[P]>
        }
      >
    >


  export type LabReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    imageUrl?: boolean
    testType?: boolean
    rawOcrText?: boolean
    simplifiedAnalysisAr?: boolean
    abnormalValues?: boolean
    doctorAdviceQuestions?: boolean
    suggestedVitamins?: boolean
    createdAt?: boolean
    customer?: boolean | LabReport$customerArgs<ExtArgs>
  }, ExtArgs["result"]["labReport"]>

  export type LabReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    imageUrl?: boolean
    testType?: boolean
    rawOcrText?: boolean
    simplifiedAnalysisAr?: boolean
    abnormalValues?: boolean
    doctorAdviceQuestions?: boolean
    suggestedVitamins?: boolean
    createdAt?: boolean
    customer?: boolean | LabReport$customerArgs<ExtArgs>
  }, ExtArgs["result"]["labReport"]>

  export type LabReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    imageUrl?: boolean
    testType?: boolean
    rawOcrText?: boolean
    simplifiedAnalysisAr?: boolean
    abnormalValues?: boolean
    doctorAdviceQuestions?: boolean
    suggestedVitamins?: boolean
    createdAt?: boolean
    customer?: boolean | LabReport$customerArgs<ExtArgs>
  }, ExtArgs["result"]["labReport"]>

  export type LabReportSelectScalar = {
    id?: boolean
    customerId?: boolean
    imageUrl?: boolean
    testType?: boolean
    rawOcrText?: boolean
    simplifiedAnalysisAr?: boolean
    abnormalValues?: boolean
    doctorAdviceQuestions?: boolean
    suggestedVitamins?: boolean
    createdAt?: boolean
  }

  export type LabReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "imageUrl" | "testType" | "rawOcrText" | "simplifiedAnalysisAr" | "abnormalValues" | "doctorAdviceQuestions" | "suggestedVitamins" | "createdAt", ExtArgs["result"]["labReport"]>
  export type LabReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | LabReport$customerArgs<ExtArgs>
  }
  export type LabReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | LabReport$customerArgs<ExtArgs>
  }
  export type LabReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | LabReport$customerArgs<ExtArgs>
  }

  export type $LabReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabReport"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string | null
      imageUrl: string
      testType: string
      rawOcrText: string | null
      simplifiedAnalysisAr: string
      abnormalValues: string
      doctorAdviceQuestions: string | null
      suggestedVitamins: string | null
      createdAt: Date
    }, ExtArgs["result"]["labReport"]>
    composites: {}
  }

  type LabReportGetPayload<S extends boolean | null | undefined | LabReportDefaultArgs> = $Result.GetResult<Prisma.$LabReportPayload, S>

  type LabReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabReportCountAggregateInputType | true
    }

  export interface LabReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabReport'], meta: { name: 'LabReport' } }
    /**
     * Find zero or one LabReport that matches the filter.
     * @param {LabReportFindUniqueArgs} args - Arguments to find a LabReport
     * @example
     * // Get one LabReport
     * const labReport = await prisma.labReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabReportFindUniqueArgs>(args: SelectSubset<T, LabReportFindUniqueArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabReportFindUniqueOrThrowArgs} args - Arguments to find a LabReport
     * @example
     * // Get one LabReport
     * const labReport = await prisma.labReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabReportFindUniqueOrThrowArgs>(args: SelectSubset<T, LabReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportFindFirstArgs} args - Arguments to find a LabReport
     * @example
     * // Get one LabReport
     * const labReport = await prisma.labReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabReportFindFirstArgs>(args?: SelectSubset<T, LabReportFindFirstArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportFindFirstOrThrowArgs} args - Arguments to find a LabReport
     * @example
     * // Get one LabReport
     * const labReport = await prisma.labReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabReportFindFirstOrThrowArgs>(args?: SelectSubset<T, LabReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabReports
     * const labReports = await prisma.labReport.findMany()
     * 
     * // Get first 10 LabReports
     * const labReports = await prisma.labReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labReportWithIdOnly = await prisma.labReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabReportFindManyArgs>(args?: SelectSubset<T, LabReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabReport.
     * @param {LabReportCreateArgs} args - Arguments to create a LabReport.
     * @example
     * // Create one LabReport
     * const LabReport = await prisma.labReport.create({
     *   data: {
     *     // ... data to create a LabReport
     *   }
     * })
     * 
     */
    create<T extends LabReportCreateArgs>(args: SelectSubset<T, LabReportCreateArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabReports.
     * @param {LabReportCreateManyArgs} args - Arguments to create many LabReports.
     * @example
     * // Create many LabReports
     * const labReport = await prisma.labReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabReportCreateManyArgs>(args?: SelectSubset<T, LabReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabReports and returns the data saved in the database.
     * @param {LabReportCreateManyAndReturnArgs} args - Arguments to create many LabReports.
     * @example
     * // Create many LabReports
     * const labReport = await prisma.labReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabReports and only return the `id`
     * const labReportWithIdOnly = await prisma.labReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabReportCreateManyAndReturnArgs>(args?: SelectSubset<T, LabReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabReport.
     * @param {LabReportDeleteArgs} args - Arguments to delete one LabReport.
     * @example
     * // Delete one LabReport
     * const LabReport = await prisma.labReport.delete({
     *   where: {
     *     // ... filter to delete one LabReport
     *   }
     * })
     * 
     */
    delete<T extends LabReportDeleteArgs>(args: SelectSubset<T, LabReportDeleteArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabReport.
     * @param {LabReportUpdateArgs} args - Arguments to update one LabReport.
     * @example
     * // Update one LabReport
     * const labReport = await prisma.labReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabReportUpdateArgs>(args: SelectSubset<T, LabReportUpdateArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabReports.
     * @param {LabReportDeleteManyArgs} args - Arguments to filter LabReports to delete.
     * @example
     * // Delete a few LabReports
     * const { count } = await prisma.labReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabReportDeleteManyArgs>(args?: SelectSubset<T, LabReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabReports
     * const labReport = await prisma.labReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabReportUpdateManyArgs>(args: SelectSubset<T, LabReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabReports and returns the data updated in the database.
     * @param {LabReportUpdateManyAndReturnArgs} args - Arguments to update many LabReports.
     * @example
     * // Update many LabReports
     * const labReport = await prisma.labReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabReports and only return the `id`
     * const labReportWithIdOnly = await prisma.labReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabReportUpdateManyAndReturnArgs>(args: SelectSubset<T, LabReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabReport.
     * @param {LabReportUpsertArgs} args - Arguments to update or create a LabReport.
     * @example
     * // Update or create a LabReport
     * const labReport = await prisma.labReport.upsert({
     *   create: {
     *     // ... data to create a LabReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabReport we want to update
     *   }
     * })
     */
    upsert<T extends LabReportUpsertArgs>(args: SelectSubset<T, LabReportUpsertArgs<ExtArgs>>): Prisma__LabReportClient<$Result.GetResult<Prisma.$LabReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportCountArgs} args - Arguments to filter LabReports to count.
     * @example
     * // Count the number of LabReports
     * const count = await prisma.labReport.count({
     *   where: {
     *     // ... the filter for the LabReports we want to count
     *   }
     * })
    **/
    count<T extends LabReportCountArgs>(
      args?: Subset<T, LabReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabReportAggregateArgs>(args: Subset<T, LabReportAggregateArgs>): Prisma.PrismaPromise<GetLabReportAggregateType<T>>

    /**
     * Group by LabReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabReportGroupByArgs} args - Group by arguments.
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
      T extends LabReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabReportGroupByArgs['orderBy'] }
        : { orderBy?: LabReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabReport model
   */
  readonly fields: LabReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends LabReport$customerArgs<ExtArgs> = {}>(args?: Subset<T, LabReport$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LabReport model
   */
  interface LabReportFieldRefs {
    readonly id: FieldRef<"LabReport", 'String'>
    readonly customerId: FieldRef<"LabReport", 'String'>
    readonly imageUrl: FieldRef<"LabReport", 'String'>
    readonly testType: FieldRef<"LabReport", 'String'>
    readonly rawOcrText: FieldRef<"LabReport", 'String'>
    readonly simplifiedAnalysisAr: FieldRef<"LabReport", 'String'>
    readonly abnormalValues: FieldRef<"LabReport", 'String'>
    readonly doctorAdviceQuestions: FieldRef<"LabReport", 'String'>
    readonly suggestedVitamins: FieldRef<"LabReport", 'String'>
    readonly createdAt: FieldRef<"LabReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabReport findUnique
   */
  export type LabReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReport to fetch.
     */
    where: LabReportWhereUniqueInput
  }

  /**
   * LabReport findUniqueOrThrow
   */
  export type LabReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReport to fetch.
     */
    where: LabReportWhereUniqueInput
  }

  /**
   * LabReport findFirst
   */
  export type LabReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReport to fetch.
     */
    where?: LabReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabReports to fetch.
     */
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabReports.
     */
    cursor?: LabReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabReports.
     */
    distinct?: LabReportScalarFieldEnum | LabReportScalarFieldEnum[]
  }

  /**
   * LabReport findFirstOrThrow
   */
  export type LabReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReport to fetch.
     */
    where?: LabReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabReports to fetch.
     */
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabReports.
     */
    cursor?: LabReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabReports.
     */
    distinct?: LabReportScalarFieldEnum | LabReportScalarFieldEnum[]
  }

  /**
   * LabReport findMany
   */
  export type LabReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter, which LabReports to fetch.
     */
    where?: LabReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabReports to fetch.
     */
    orderBy?: LabReportOrderByWithRelationInput | LabReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabReports.
     */
    cursor?: LabReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabReports.
     */
    distinct?: LabReportScalarFieldEnum | LabReportScalarFieldEnum[]
  }

  /**
   * LabReport create
   */
  export type LabReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * The data needed to create a LabReport.
     */
    data: XOR<LabReportCreateInput, LabReportUncheckedCreateInput>
  }

  /**
   * LabReport createMany
   */
  export type LabReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabReports.
     */
    data: LabReportCreateManyInput | LabReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabReport createManyAndReturn
   */
  export type LabReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * The data used to create many LabReports.
     */
    data: LabReportCreateManyInput | LabReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabReport update
   */
  export type LabReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * The data needed to update a LabReport.
     */
    data: XOR<LabReportUpdateInput, LabReportUncheckedUpdateInput>
    /**
     * Choose, which LabReport to update.
     */
    where: LabReportWhereUniqueInput
  }

  /**
   * LabReport updateMany
   */
  export type LabReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabReports.
     */
    data: XOR<LabReportUpdateManyMutationInput, LabReportUncheckedUpdateManyInput>
    /**
     * Filter which LabReports to update
     */
    where?: LabReportWhereInput
    /**
     * Limit how many LabReports to update.
     */
    limit?: number
  }

  /**
   * LabReport updateManyAndReturn
   */
  export type LabReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * The data used to update LabReports.
     */
    data: XOR<LabReportUpdateManyMutationInput, LabReportUncheckedUpdateManyInput>
    /**
     * Filter which LabReports to update
     */
    where?: LabReportWhereInput
    /**
     * Limit how many LabReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LabReport upsert
   */
  export type LabReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * The filter to search for the LabReport to update in case it exists.
     */
    where: LabReportWhereUniqueInput
    /**
     * In case the LabReport found by the `where` argument doesn't exist, create a new LabReport with this data.
     */
    create: XOR<LabReportCreateInput, LabReportUncheckedCreateInput>
    /**
     * In case the LabReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabReportUpdateInput, LabReportUncheckedUpdateInput>
  }

  /**
   * LabReport delete
   */
  export type LabReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
    /**
     * Filter which LabReport to delete.
     */
    where: LabReportWhereUniqueInput
  }

  /**
   * LabReport deleteMany
   */
  export type LabReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabReports to delete
     */
    where?: LabReportWhereInput
    /**
     * Limit how many LabReports to delete.
     */
    limit?: number
  }

  /**
   * LabReport.customer
   */
  export type LabReport$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CustomerWhereInput
  }

  /**
   * LabReport without action
   */
  export type LabReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabReport
     */
    select?: LabReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabReport
     */
    omit?: LabReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabReportInclude<ExtArgs> | null
  }


  /**
   * Model ShortageRequest
   */

  export type AggregateShortageRequest = {
    _count: ShortageRequestCountAggregateOutputType | null
    _avg: ShortageRequestAvgAggregateOutputType | null
    _sum: ShortageRequestSumAggregateOutputType | null
    _min: ShortageRequestMinAggregateOutputType | null
    _max: ShortageRequestMaxAggregateOutputType | null
  }

  export type ShortageRequestAvgAggregateOutputType = {
    quantityNeeded: number | null
  }

  export type ShortageRequestSumAggregateOutputType = {
    quantityNeeded: number | null
  }

  export type ShortageRequestMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    medicineName: string | null
    genericName: string | null
    customerCity: string | null
    governorate: string | null
    quantityNeeded: number | null
    urgency: string | null
    status: string | null
    foundPharmacyId: string | null
    reservationExpiry: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type ShortageRequestMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    medicineName: string | null
    genericName: string | null
    customerCity: string | null
    governorate: string | null
    quantityNeeded: number | null
    urgency: string | null
    status: string | null
    foundPharmacyId: string | null
    reservationExpiry: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type ShortageRequestCountAggregateOutputType = {
    id: number
    customerId: number
    medicineName: number
    genericName: number
    customerCity: number
    governorate: number
    quantityNeeded: number
    urgency: number
    status: number
    foundPharmacyId: number
    reservationExpiry: number
    notes: number
    createdAt: number
    _all: number
  }


  export type ShortageRequestAvgAggregateInputType = {
    quantityNeeded?: true
  }

  export type ShortageRequestSumAggregateInputType = {
    quantityNeeded?: true
  }

  export type ShortageRequestMinAggregateInputType = {
    id?: true
    customerId?: true
    medicineName?: true
    genericName?: true
    customerCity?: true
    governorate?: true
    quantityNeeded?: true
    urgency?: true
    status?: true
    foundPharmacyId?: true
    reservationExpiry?: true
    notes?: true
    createdAt?: true
  }

  export type ShortageRequestMaxAggregateInputType = {
    id?: true
    customerId?: true
    medicineName?: true
    genericName?: true
    customerCity?: true
    governorate?: true
    quantityNeeded?: true
    urgency?: true
    status?: true
    foundPharmacyId?: true
    reservationExpiry?: true
    notes?: true
    createdAt?: true
  }

  export type ShortageRequestCountAggregateInputType = {
    id?: true
    customerId?: true
    medicineName?: true
    genericName?: true
    customerCity?: true
    governorate?: true
    quantityNeeded?: true
    urgency?: true
    status?: true
    foundPharmacyId?: true
    reservationExpiry?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type ShortageRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortageRequest to aggregate.
     */
    where?: ShortageRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortageRequests to fetch.
     */
    orderBy?: ShortageRequestOrderByWithRelationInput | ShortageRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShortageRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortageRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortageRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShortageRequests
    **/
    _count?: true | ShortageRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShortageRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShortageRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortageRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortageRequestMaxAggregateInputType
  }

  export type GetShortageRequestAggregateType<T extends ShortageRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateShortageRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortageRequest[P]>
      : GetScalarType<T[P], AggregateShortageRequest[P]>
  }




  export type ShortageRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortageRequestWhereInput
    orderBy?: ShortageRequestOrderByWithAggregationInput | ShortageRequestOrderByWithAggregationInput[]
    by: ShortageRequestScalarFieldEnum[] | ShortageRequestScalarFieldEnum
    having?: ShortageRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortageRequestCountAggregateInputType | true
    _avg?: ShortageRequestAvgAggregateInputType
    _sum?: ShortageRequestSumAggregateInputType
    _min?: ShortageRequestMinAggregateInputType
    _max?: ShortageRequestMaxAggregateInputType
  }

  export type ShortageRequestGroupByOutputType = {
    id: string
    customerId: string | null
    medicineName: string
    genericName: string | null
    customerCity: string
    governorate: string
    quantityNeeded: number
    urgency: string
    status: string
    foundPharmacyId: string | null
    reservationExpiry: Date | null
    notes: string | null
    createdAt: Date
    _count: ShortageRequestCountAggregateOutputType | null
    _avg: ShortageRequestAvgAggregateOutputType | null
    _sum: ShortageRequestSumAggregateOutputType | null
    _min: ShortageRequestMinAggregateOutputType | null
    _max: ShortageRequestMaxAggregateOutputType | null
  }

  type GetShortageRequestGroupByPayload<T extends ShortageRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortageRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortageRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortageRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ShortageRequestGroupByOutputType[P]>
        }
      >
    >


  export type ShortageRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    medicineName?: boolean
    genericName?: boolean
    customerCity?: boolean
    governorate?: boolean
    quantityNeeded?: boolean
    urgency?: boolean
    status?: boolean
    foundPharmacyId?: boolean
    reservationExpiry?: boolean
    notes?: boolean
    createdAt?: boolean
    customer?: boolean | ShortageRequest$customerArgs<ExtArgs>
    orders?: boolean | ShortageRequest$ordersArgs<ExtArgs>
    _count?: boolean | ShortageRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shortageRequest"]>

  export type ShortageRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    medicineName?: boolean
    genericName?: boolean
    customerCity?: boolean
    governorate?: boolean
    quantityNeeded?: boolean
    urgency?: boolean
    status?: boolean
    foundPharmacyId?: boolean
    reservationExpiry?: boolean
    notes?: boolean
    createdAt?: boolean
    customer?: boolean | ShortageRequest$customerArgs<ExtArgs>
  }, ExtArgs["result"]["shortageRequest"]>

  export type ShortageRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    medicineName?: boolean
    genericName?: boolean
    customerCity?: boolean
    governorate?: boolean
    quantityNeeded?: boolean
    urgency?: boolean
    status?: boolean
    foundPharmacyId?: boolean
    reservationExpiry?: boolean
    notes?: boolean
    createdAt?: boolean
    customer?: boolean | ShortageRequest$customerArgs<ExtArgs>
  }, ExtArgs["result"]["shortageRequest"]>

  export type ShortageRequestSelectScalar = {
    id?: boolean
    customerId?: boolean
    medicineName?: boolean
    genericName?: boolean
    customerCity?: boolean
    governorate?: boolean
    quantityNeeded?: boolean
    urgency?: boolean
    status?: boolean
    foundPharmacyId?: boolean
    reservationExpiry?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type ShortageRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "medicineName" | "genericName" | "customerCity" | "governorate" | "quantityNeeded" | "urgency" | "status" | "foundPharmacyId" | "reservationExpiry" | "notes" | "createdAt", ExtArgs["result"]["shortageRequest"]>
  export type ShortageRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | ShortageRequest$customerArgs<ExtArgs>
    orders?: boolean | ShortageRequest$ordersArgs<ExtArgs>
    _count?: boolean | ShortageRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShortageRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | ShortageRequest$customerArgs<ExtArgs>
  }
  export type ShortageRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | ShortageRequest$customerArgs<ExtArgs>
  }

  export type $ShortageRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShortageRequest"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string | null
      medicineName: string
      genericName: string | null
      customerCity: string
      governorate: string
      quantityNeeded: number
      urgency: string
      status: string
      foundPharmacyId: string | null
      reservationExpiry: Date | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["shortageRequest"]>
    composites: {}
  }

  type ShortageRequestGetPayload<S extends boolean | null | undefined | ShortageRequestDefaultArgs> = $Result.GetResult<Prisma.$ShortageRequestPayload, S>

  type ShortageRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShortageRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShortageRequestCountAggregateInputType | true
    }

  export interface ShortageRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShortageRequest'], meta: { name: 'ShortageRequest' } }
    /**
     * Find zero or one ShortageRequest that matches the filter.
     * @param {ShortageRequestFindUniqueArgs} args - Arguments to find a ShortageRequest
     * @example
     * // Get one ShortageRequest
     * const shortageRequest = await prisma.shortageRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortageRequestFindUniqueArgs>(args: SelectSubset<T, ShortageRequestFindUniqueArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShortageRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortageRequestFindUniqueOrThrowArgs} args - Arguments to find a ShortageRequest
     * @example
     * // Get one ShortageRequest
     * const shortageRequest = await prisma.shortageRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortageRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ShortageRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortageRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortageRequestFindFirstArgs} args - Arguments to find a ShortageRequest
     * @example
     * // Get one ShortageRequest
     * const shortageRequest = await prisma.shortageRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortageRequestFindFirstArgs>(args?: SelectSubset<T, ShortageRequestFindFirstArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortageRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortageRequestFindFirstOrThrowArgs} args - Arguments to find a ShortageRequest
     * @example
     * // Get one ShortageRequest
     * const shortageRequest = await prisma.shortageRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortageRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ShortageRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShortageRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortageRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortageRequests
     * const shortageRequests = await prisma.shortageRequest.findMany()
     * 
     * // Get first 10 ShortageRequests
     * const shortageRequests = await prisma.shortageRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortageRequestWithIdOnly = await prisma.shortageRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShortageRequestFindManyArgs>(args?: SelectSubset<T, ShortageRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShortageRequest.
     * @param {ShortageRequestCreateArgs} args - Arguments to create a ShortageRequest.
     * @example
     * // Create one ShortageRequest
     * const ShortageRequest = await prisma.shortageRequest.create({
     *   data: {
     *     // ... data to create a ShortageRequest
     *   }
     * })
     * 
     */
    create<T extends ShortageRequestCreateArgs>(args: SelectSubset<T, ShortageRequestCreateArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShortageRequests.
     * @param {ShortageRequestCreateManyArgs} args - Arguments to create many ShortageRequests.
     * @example
     * // Create many ShortageRequests
     * const shortageRequest = await prisma.shortageRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShortageRequestCreateManyArgs>(args?: SelectSubset<T, ShortageRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShortageRequests and returns the data saved in the database.
     * @param {ShortageRequestCreateManyAndReturnArgs} args - Arguments to create many ShortageRequests.
     * @example
     * // Create many ShortageRequests
     * const shortageRequest = await prisma.shortageRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShortageRequests and only return the `id`
     * const shortageRequestWithIdOnly = await prisma.shortageRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShortageRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ShortageRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShortageRequest.
     * @param {ShortageRequestDeleteArgs} args - Arguments to delete one ShortageRequest.
     * @example
     * // Delete one ShortageRequest
     * const ShortageRequest = await prisma.shortageRequest.delete({
     *   where: {
     *     // ... filter to delete one ShortageRequest
     *   }
     * })
     * 
     */
    delete<T extends ShortageRequestDeleteArgs>(args: SelectSubset<T, ShortageRequestDeleteArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShortageRequest.
     * @param {ShortageRequestUpdateArgs} args - Arguments to update one ShortageRequest.
     * @example
     * // Update one ShortageRequest
     * const shortageRequest = await prisma.shortageRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShortageRequestUpdateArgs>(args: SelectSubset<T, ShortageRequestUpdateArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShortageRequests.
     * @param {ShortageRequestDeleteManyArgs} args - Arguments to filter ShortageRequests to delete.
     * @example
     * // Delete a few ShortageRequests
     * const { count } = await prisma.shortageRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShortageRequestDeleteManyArgs>(args?: SelectSubset<T, ShortageRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortageRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortageRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortageRequests
     * const shortageRequest = await prisma.shortageRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShortageRequestUpdateManyArgs>(args: SelectSubset<T, ShortageRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortageRequests and returns the data updated in the database.
     * @param {ShortageRequestUpdateManyAndReturnArgs} args - Arguments to update many ShortageRequests.
     * @example
     * // Update many ShortageRequests
     * const shortageRequest = await prisma.shortageRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShortageRequests and only return the `id`
     * const shortageRequestWithIdOnly = await prisma.shortageRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShortageRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ShortageRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShortageRequest.
     * @param {ShortageRequestUpsertArgs} args - Arguments to update or create a ShortageRequest.
     * @example
     * // Update or create a ShortageRequest
     * const shortageRequest = await prisma.shortageRequest.upsert({
     *   create: {
     *     // ... data to create a ShortageRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortageRequest we want to update
     *   }
     * })
     */
    upsert<T extends ShortageRequestUpsertArgs>(args: SelectSubset<T, ShortageRequestUpsertArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShortageRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortageRequestCountArgs} args - Arguments to filter ShortageRequests to count.
     * @example
     * // Count the number of ShortageRequests
     * const count = await prisma.shortageRequest.count({
     *   where: {
     *     // ... the filter for the ShortageRequests we want to count
     *   }
     * })
    **/
    count<T extends ShortageRequestCountArgs>(
      args?: Subset<T, ShortageRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortageRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShortageRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortageRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShortageRequestAggregateArgs>(args: Subset<T, ShortageRequestAggregateArgs>): Prisma.PrismaPromise<GetShortageRequestAggregateType<T>>

    /**
     * Group by ShortageRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortageRequestGroupByArgs} args - Group by arguments.
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
      T extends ShortageRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortageRequestGroupByArgs['orderBy'] }
        : { orderBy?: ShortageRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShortageRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortageRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShortageRequest model
   */
  readonly fields: ShortageRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShortageRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortageRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends ShortageRequest$customerArgs<ExtArgs> = {}>(args?: Subset<T, ShortageRequest$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends ShortageRequest$ordersArgs<ExtArgs> = {}>(args?: Subset<T, ShortageRequest$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShortageRequest model
   */
  interface ShortageRequestFieldRefs {
    readonly id: FieldRef<"ShortageRequest", 'String'>
    readonly customerId: FieldRef<"ShortageRequest", 'String'>
    readonly medicineName: FieldRef<"ShortageRequest", 'String'>
    readonly genericName: FieldRef<"ShortageRequest", 'String'>
    readonly customerCity: FieldRef<"ShortageRequest", 'String'>
    readonly governorate: FieldRef<"ShortageRequest", 'String'>
    readonly quantityNeeded: FieldRef<"ShortageRequest", 'Int'>
    readonly urgency: FieldRef<"ShortageRequest", 'String'>
    readonly status: FieldRef<"ShortageRequest", 'String'>
    readonly foundPharmacyId: FieldRef<"ShortageRequest", 'String'>
    readonly reservationExpiry: FieldRef<"ShortageRequest", 'DateTime'>
    readonly notes: FieldRef<"ShortageRequest", 'String'>
    readonly createdAt: FieldRef<"ShortageRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShortageRequest findUnique
   */
  export type ShortageRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShortageRequest to fetch.
     */
    where: ShortageRequestWhereUniqueInput
  }

  /**
   * ShortageRequest findUniqueOrThrow
   */
  export type ShortageRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShortageRequest to fetch.
     */
    where: ShortageRequestWhereUniqueInput
  }

  /**
   * ShortageRequest findFirst
   */
  export type ShortageRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShortageRequest to fetch.
     */
    where?: ShortageRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortageRequests to fetch.
     */
    orderBy?: ShortageRequestOrderByWithRelationInput | ShortageRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortageRequests.
     */
    cursor?: ShortageRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortageRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortageRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortageRequests.
     */
    distinct?: ShortageRequestScalarFieldEnum | ShortageRequestScalarFieldEnum[]
  }

  /**
   * ShortageRequest findFirstOrThrow
   */
  export type ShortageRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShortageRequest to fetch.
     */
    where?: ShortageRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortageRequests to fetch.
     */
    orderBy?: ShortageRequestOrderByWithRelationInput | ShortageRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortageRequests.
     */
    cursor?: ShortageRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortageRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortageRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortageRequests.
     */
    distinct?: ShortageRequestScalarFieldEnum | ShortageRequestScalarFieldEnum[]
  }

  /**
   * ShortageRequest findMany
   */
  export type ShortageRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShortageRequests to fetch.
     */
    where?: ShortageRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortageRequests to fetch.
     */
    orderBy?: ShortageRequestOrderByWithRelationInput | ShortageRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShortageRequests.
     */
    cursor?: ShortageRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortageRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortageRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortageRequests.
     */
    distinct?: ShortageRequestScalarFieldEnum | ShortageRequestScalarFieldEnum[]
  }

  /**
   * ShortageRequest create
   */
  export type ShortageRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ShortageRequest.
     */
    data: XOR<ShortageRequestCreateInput, ShortageRequestUncheckedCreateInput>
  }

  /**
   * ShortageRequest createMany
   */
  export type ShortageRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShortageRequests.
     */
    data: ShortageRequestCreateManyInput | ShortageRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShortageRequest createManyAndReturn
   */
  export type ShortageRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ShortageRequests.
     */
    data: ShortageRequestCreateManyInput | ShortageRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShortageRequest update
   */
  export type ShortageRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ShortageRequest.
     */
    data: XOR<ShortageRequestUpdateInput, ShortageRequestUncheckedUpdateInput>
    /**
     * Choose, which ShortageRequest to update.
     */
    where: ShortageRequestWhereUniqueInput
  }

  /**
   * ShortageRequest updateMany
   */
  export type ShortageRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShortageRequests.
     */
    data: XOR<ShortageRequestUpdateManyMutationInput, ShortageRequestUncheckedUpdateManyInput>
    /**
     * Filter which ShortageRequests to update
     */
    where?: ShortageRequestWhereInput
    /**
     * Limit how many ShortageRequests to update.
     */
    limit?: number
  }

  /**
   * ShortageRequest updateManyAndReturn
   */
  export type ShortageRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * The data used to update ShortageRequests.
     */
    data: XOR<ShortageRequestUpdateManyMutationInput, ShortageRequestUncheckedUpdateManyInput>
    /**
     * Filter which ShortageRequests to update
     */
    where?: ShortageRequestWhereInput
    /**
     * Limit how many ShortageRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShortageRequest upsert
   */
  export type ShortageRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ShortageRequest to update in case it exists.
     */
    where: ShortageRequestWhereUniqueInput
    /**
     * In case the ShortageRequest found by the `where` argument doesn't exist, create a new ShortageRequest with this data.
     */
    create: XOR<ShortageRequestCreateInput, ShortageRequestUncheckedCreateInput>
    /**
     * In case the ShortageRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortageRequestUpdateInput, ShortageRequestUncheckedUpdateInput>
  }

  /**
   * ShortageRequest delete
   */
  export type ShortageRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    /**
     * Filter which ShortageRequest to delete.
     */
    where: ShortageRequestWhereUniqueInput
  }

  /**
   * ShortageRequest deleteMany
   */
  export type ShortageRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortageRequests to delete
     */
    where?: ShortageRequestWhereInput
    /**
     * Limit how many ShortageRequests to delete.
     */
    limit?: number
  }

  /**
   * ShortageRequest.customer
   */
  export type ShortageRequest$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CustomerWhereInput
  }

  /**
   * ShortageRequest.orders
   */
  export type ShortageRequest$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * ShortageRequest without action
   */
  export type ShortageRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    subtotal: number | null
    deliveryFee: number | null
    totalAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    subtotal: number | null
    deliveryFee: number | null
    totalAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    pharmacyId: string | null
    customerId: string | null
    customerName: string | null
    customerPhone: string | null
    customerAddress: string | null
    orderType: string | null
    items: string | null
    subtotal: number | null
    deliveryFee: number | null
    totalAmount: number | null
    paymentMethod: string | null
    status: string | null
    courierId: string | null
    prescriptionId: string | null
    shortageRequestId: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    pharmacyId: string | null
    customerId: string | null
    customerName: string | null
    customerPhone: string | null
    customerAddress: string | null
    orderType: string | null
    items: string | null
    subtotal: number | null
    deliveryFee: number | null
    totalAmount: number | null
    paymentMethod: string | null
    status: string | null
    courierId: string | null
    prescriptionId: string | null
    shortageRequestId: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    pharmacyId: number
    customerId: number
    customerName: number
    customerPhone: number
    customerAddress: number
    orderType: number
    items: number
    subtotal: number
    deliveryFee: number
    totalAmount: number
    paymentMethod: number
    status: number
    courierId: number
    prescriptionId: number
    shortageRequestId: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    subtotal?: true
    deliveryFee?: true
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    subtotal?: true
    deliveryFee?: true
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    pharmacyId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    customerAddress?: true
    orderType?: true
    items?: true
    subtotal?: true
    deliveryFee?: true
    totalAmount?: true
    paymentMethod?: true
    status?: true
    courierId?: true
    prescriptionId?: true
    shortageRequestId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    pharmacyId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    customerAddress?: true
    orderType?: true
    items?: true
    subtotal?: true
    deliveryFee?: true
    totalAmount?: true
    paymentMethod?: true
    status?: true
    courierId?: true
    prescriptionId?: true
    shortageRequestId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    pharmacyId?: true
    customerId?: true
    customerName?: true
    customerPhone?: true
    customerAddress?: true
    orderType?: true
    items?: true
    subtotal?: true
    deliveryFee?: true
    totalAmount?: true
    paymentMethod?: true
    status?: true
    courierId?: true
    prescriptionId?: true
    shortageRequestId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    pharmacyId: string
    customerId: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType: string
    items: string
    subtotal: number
    deliveryFee: number
    totalAmount: number
    paymentMethod: string
    status: string
    courierId: string | null
    prescriptionId: string | null
    shortageRequestId: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    pharmacyId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerAddress?: boolean
    orderType?: boolean
    items?: boolean
    subtotal?: boolean
    deliveryFee?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    status?: boolean
    courierId?: boolean
    prescriptionId?: boolean
    shortageRequestId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    courier?: boolean | Order$courierArgs<ExtArgs>
    prescription?: boolean | Order$prescriptionArgs<ExtArgs>
    shortageRequest?: boolean | Order$shortageRequestArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    pharmacyId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerAddress?: boolean
    orderType?: boolean
    items?: boolean
    subtotal?: boolean
    deliveryFee?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    status?: boolean
    courierId?: boolean
    prescriptionId?: boolean
    shortageRequestId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    courier?: boolean | Order$courierArgs<ExtArgs>
    prescription?: boolean | Order$prescriptionArgs<ExtArgs>
    shortageRequest?: boolean | Order$shortageRequestArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    pharmacyId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerAddress?: boolean
    orderType?: boolean
    items?: boolean
    subtotal?: boolean
    deliveryFee?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    status?: boolean
    courierId?: boolean
    prescriptionId?: boolean
    shortageRequestId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    courier?: boolean | Order$courierArgs<ExtArgs>
    prescription?: boolean | Order$prescriptionArgs<ExtArgs>
    shortageRequest?: boolean | Order$shortageRequestArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    pharmacyId?: boolean
    customerId?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerAddress?: boolean
    orderType?: boolean
    items?: boolean
    subtotal?: boolean
    deliveryFee?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    status?: boolean
    courierId?: boolean
    prescriptionId?: boolean
    shortageRequestId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "pharmacyId" | "customerId" | "customerName" | "customerPhone" | "customerAddress" | "orderType" | "items" | "subtotal" | "deliveryFee" | "totalAmount" | "paymentMethod" | "status" | "courierId" | "prescriptionId" | "shortageRequestId" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    courier?: boolean | Order$courierArgs<ExtArgs>
    prescription?: boolean | Order$prescriptionArgs<ExtArgs>
    shortageRequest?: boolean | Order$shortageRequestArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    courier?: boolean | Order$courierArgs<ExtArgs>
    prescription?: boolean | Order$prescriptionArgs<ExtArgs>
    shortageRequest?: boolean | Order$shortageRequestArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    courier?: boolean | Order$courierArgs<ExtArgs>
    prescription?: boolean | Order$prescriptionArgs<ExtArgs>
    shortageRequest?: boolean | Order$shortageRequestArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      pharmacy: Prisma.$PharmacyPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      courier: Prisma.$CourierPayload<ExtArgs> | null
      prescription: Prisma.$PrescriptionPayload<ExtArgs> | null
      shortageRequest: Prisma.$ShortageRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      pharmacyId: string
      customerId: string | null
      customerName: string
      customerPhone: string
      customerAddress: string
      orderType: string
      items: string
      subtotal: number
      deliveryFee: number
      totalAmount: number
      paymentMethod: string
      status: string
      courierId: string | null
      prescriptionId: string | null
      shortageRequestId: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacy<T extends PharmacyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmacyDefaultArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends Order$customerArgs<ExtArgs> = {}>(args?: Subset<T, Order$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courier<T extends Order$courierArgs<ExtArgs> = {}>(args?: Subset<T, Order$courierArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prescription<T extends Order$prescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Order$prescriptionArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shortageRequest<T extends Order$shortageRequestArgs<ExtArgs> = {}>(args?: Subset<T, Order$shortageRequestArgs<ExtArgs>>): Prisma__ShortageRequestClient<$Result.GetResult<Prisma.$ShortageRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly pharmacyId: FieldRef<"Order", 'String'>
    readonly customerId: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly customerPhone: FieldRef<"Order", 'String'>
    readonly customerAddress: FieldRef<"Order", 'String'>
    readonly orderType: FieldRef<"Order", 'String'>
    readonly items: FieldRef<"Order", 'String'>
    readonly subtotal: FieldRef<"Order", 'Float'>
    readonly deliveryFee: FieldRef<"Order", 'Float'>
    readonly totalAmount: FieldRef<"Order", 'Float'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly courierId: FieldRef<"Order", 'String'>
    readonly prescriptionId: FieldRef<"Order", 'String'>
    readonly shortageRequestId: FieldRef<"Order", 'String'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.customer
   */
  export type Order$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CustomerWhereInput
  }

  /**
   * Order.courier
   */
  export type Order$courierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courier
     */
    omit?: CourierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    where?: CourierWhereInput
  }

  /**
   * Order.prescription
   */
  export type Order$prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
  }

  /**
   * Order.shortageRequest
   */
  export type Order$shortageRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortageRequest
     */
    select?: ShortageRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortageRequest
     */
    omit?: ShortageRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortageRequestInclude<ExtArgs> | null
    where?: ShortageRequestWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
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


  export const PharmacyScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    nameAr: 'nameAr',
    nameEn: 'nameEn',
    licenseNumber: 'licenseNumber',
    ownerName: 'ownerName',
    phone: 'phone',
    whatsapp: 'whatsapp',
    email: 'email',
    address: 'address',
    city: 'city',
    governorate: 'governorate',
    lat: 'lat',
    lng: 'lng',
    logoUrl: 'logoUrl',
    coverUrl: 'coverUrl',
    rating: 'rating',
    isOpen: 'isOpen',
    deliveryAvailable: 'deliveryAvailable',
    deliveryFee: 'deliveryFee',
    deliveryTimeEstimate: 'deliveryTimeEstimate',
    workingHours: 'workingHours',
    isVerified: 'isVerified',
    subscriptionPlan: 'subscriptionPlan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const PharmacyStaffScalarFieldEnum: {
    id: 'id',
    pharmacyId: 'pharmacyId',
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role',
    phone: 'phone',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type PharmacyStaffScalarFieldEnum = (typeof PharmacyStaffScalarFieldEnum)[keyof typeof PharmacyStaffScalarFieldEnum]


  export const CourierScalarFieldEnum: {
    id: 'id',
    pharmacyId: 'pharmacyId',
    name: 'name',
    phone: 'phone',
    vehicleType: 'vehicleType',
    isAvailable: 'isAvailable',
    currentLat: 'currentLat',
    currentLng: 'currentLng',
    totalOrders: 'totalOrders',
    createdAt: 'createdAt'
  };

  export type CourierScalarFieldEnum = (typeof CourierScalarFieldEnum)[keyof typeof CourierScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    city: 'city',
    address: 'address',
    lat: 'lat',
    lng: 'lng',
    allergies: 'allergies',
    chronicDiseases: 'chronicDiseases',
    totalOrders: 'totalOrders',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    tradeNameAr: 'tradeNameAr',
    tradeNameEn: 'tradeNameEn',
    genericName: 'genericName',
    strength: 'strength',
    dosageForm: 'dosageForm',
    category: 'category',
    officialPrice: 'officialPrice',
    manufacturer: 'manufacturer',
    barcode: 'barcode',
    image: 'image',
    requiresPrescription: 'requiresPrescription',
    isShortage: 'isShortage',
    alternatives: 'alternatives',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const PharmacyInventoryScalarFieldEnum: {
    id: 'id',
    pharmacyId: 'pharmacyId',
    medicineId: 'medicineId',
    stockQuantity: 'stockQuantity',
    price: 'price',
    isAvailable: 'isAvailable',
    expiryDate: 'expiryDate',
    updatedAt: 'updatedAt'
  };

  export type PharmacyInventoryScalarFieldEnum = (typeof PharmacyInventoryScalarFieldEnum)[keyof typeof PharmacyInventoryScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    pharmacyId: 'pharmacyId',
    imageUrl: 'imageUrl',
    rawOcrText: 'rawOcrText',
    parsedMedicines: 'parsedMedicines',
    doctorSpecialty: 'doctorSpecialty',
    aiConfidence: 'aiConfidence',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const LabReportScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    imageUrl: 'imageUrl',
    testType: 'testType',
    rawOcrText: 'rawOcrText',
    simplifiedAnalysisAr: 'simplifiedAnalysisAr',
    abnormalValues: 'abnormalValues',
    doctorAdviceQuestions: 'doctorAdviceQuestions',
    suggestedVitamins: 'suggestedVitamins',
    createdAt: 'createdAt'
  };

  export type LabReportScalarFieldEnum = (typeof LabReportScalarFieldEnum)[keyof typeof LabReportScalarFieldEnum]


  export const ShortageRequestScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    medicineName: 'medicineName',
    genericName: 'genericName',
    customerCity: 'customerCity',
    governorate: 'governorate',
    quantityNeeded: 'quantityNeeded',
    urgency: 'urgency',
    status: 'status',
    foundPharmacyId: 'foundPharmacyId',
    reservationExpiry: 'reservationExpiry',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type ShortageRequestScalarFieldEnum = (typeof ShortageRequestScalarFieldEnum)[keyof typeof ShortageRequestScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    pharmacyId: 'pharmacyId',
    customerId: 'customerId',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    customerAddress: 'customerAddress',
    orderType: 'orderType',
    items: 'items',
    subtotal: 'subtotal',
    deliveryFee: 'deliveryFee',
    totalAmount: 'totalAmount',
    paymentMethod: 'paymentMethod',
    status: 'status',
    courierId: 'courierId',
    prescriptionId: 'prescriptionId',
    shortageRequestId: 'shortageRequestId',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PharmacyWhereInput = {
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    id?: StringFilter<"Pharmacy"> | string
    slug?: StringFilter<"Pharmacy"> | string
    nameAr?: StringFilter<"Pharmacy"> | string
    nameEn?: StringFilter<"Pharmacy"> | string
    licenseNumber?: StringNullableFilter<"Pharmacy"> | string | null
    ownerName?: StringFilter<"Pharmacy"> | string
    phone?: StringFilter<"Pharmacy"> | string
    whatsapp?: StringFilter<"Pharmacy"> | string
    email?: StringNullableFilter<"Pharmacy"> | string | null
    address?: StringFilter<"Pharmacy"> | string
    city?: StringFilter<"Pharmacy"> | string
    governorate?: StringFilter<"Pharmacy"> | string
    lat?: FloatNullableFilter<"Pharmacy"> | number | null
    lng?: FloatNullableFilter<"Pharmacy"> | number | null
    logoUrl?: StringNullableFilter<"Pharmacy"> | string | null
    coverUrl?: StringNullableFilter<"Pharmacy"> | string | null
    rating?: FloatFilter<"Pharmacy"> | number
    isOpen?: BoolFilter<"Pharmacy"> | boolean
    deliveryAvailable?: BoolFilter<"Pharmacy"> | boolean
    deliveryFee?: FloatFilter<"Pharmacy"> | number
    deliveryTimeEstimate?: StringFilter<"Pharmacy"> | string
    workingHours?: StringFilter<"Pharmacy"> | string
    isVerified?: BoolFilter<"Pharmacy"> | boolean
    subscriptionPlan?: StringFilter<"Pharmacy"> | string
    createdAt?: DateTimeFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
    staff?: PharmacyStaffListRelationFilter
    inventory?: PharmacyInventoryListRelationFilter
    couriers?: CourierListRelationFilter
    orders?: OrderListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }

  export type PharmacyOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    ownerName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    rating?: SortOrder
    isOpen?: SortOrder
    deliveryAvailable?: SortOrder
    deliveryFee?: SortOrder
    deliveryTimeEstimate?: SortOrder
    workingHours?: SortOrder
    isVerified?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    staff?: PharmacyStaffOrderByRelationAggregateInput
    inventory?: PharmacyInventoryOrderByRelationAggregateInput
    couriers?: CourierOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type PharmacyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    nameAr?: StringFilter<"Pharmacy"> | string
    nameEn?: StringFilter<"Pharmacy"> | string
    licenseNumber?: StringNullableFilter<"Pharmacy"> | string | null
    ownerName?: StringFilter<"Pharmacy"> | string
    phone?: StringFilter<"Pharmacy"> | string
    whatsapp?: StringFilter<"Pharmacy"> | string
    email?: StringNullableFilter<"Pharmacy"> | string | null
    address?: StringFilter<"Pharmacy"> | string
    city?: StringFilter<"Pharmacy"> | string
    governorate?: StringFilter<"Pharmacy"> | string
    lat?: FloatNullableFilter<"Pharmacy"> | number | null
    lng?: FloatNullableFilter<"Pharmacy"> | number | null
    logoUrl?: StringNullableFilter<"Pharmacy"> | string | null
    coverUrl?: StringNullableFilter<"Pharmacy"> | string | null
    rating?: FloatFilter<"Pharmacy"> | number
    isOpen?: BoolFilter<"Pharmacy"> | boolean
    deliveryAvailable?: BoolFilter<"Pharmacy"> | boolean
    deliveryFee?: FloatFilter<"Pharmacy"> | number
    deliveryTimeEstimate?: StringFilter<"Pharmacy"> | string
    workingHours?: StringFilter<"Pharmacy"> | string
    isVerified?: BoolFilter<"Pharmacy"> | boolean
    subscriptionPlan?: StringFilter<"Pharmacy"> | string
    createdAt?: DateTimeFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
    staff?: PharmacyStaffListRelationFilter
    inventory?: PharmacyInventoryListRelationFilter
    couriers?: CourierListRelationFilter
    orders?: OrderListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }, "id" | "slug">

  export type PharmacyOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    ownerName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    rating?: SortOrder
    isOpen?: SortOrder
    deliveryAvailable?: SortOrder
    deliveryFee?: SortOrder
    deliveryTimeEstimate?: SortOrder
    workingHours?: SortOrder
    isVerified?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _avg?: PharmacyAvgOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
    _sum?: PharmacySumOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    OR?: PharmacyScalarWhereWithAggregatesInput[]
    NOT?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pharmacy"> | string
    slug?: StringWithAggregatesFilter<"Pharmacy"> | string
    nameAr?: StringWithAggregatesFilter<"Pharmacy"> | string
    nameEn?: StringWithAggregatesFilter<"Pharmacy"> | string
    licenseNumber?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    ownerName?: StringWithAggregatesFilter<"Pharmacy"> | string
    phone?: StringWithAggregatesFilter<"Pharmacy"> | string
    whatsapp?: StringWithAggregatesFilter<"Pharmacy"> | string
    email?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    address?: StringWithAggregatesFilter<"Pharmacy"> | string
    city?: StringWithAggregatesFilter<"Pharmacy"> | string
    governorate?: StringWithAggregatesFilter<"Pharmacy"> | string
    lat?: FloatNullableWithAggregatesFilter<"Pharmacy"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Pharmacy"> | number | null
    logoUrl?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    rating?: FloatWithAggregatesFilter<"Pharmacy"> | number
    isOpen?: BoolWithAggregatesFilter<"Pharmacy"> | boolean
    deliveryAvailable?: BoolWithAggregatesFilter<"Pharmacy"> | boolean
    deliveryFee?: FloatWithAggregatesFilter<"Pharmacy"> | number
    deliveryTimeEstimate?: StringWithAggregatesFilter<"Pharmacy"> | string
    workingHours?: StringWithAggregatesFilter<"Pharmacy"> | string
    isVerified?: BoolWithAggregatesFilter<"Pharmacy"> | boolean
    subscriptionPlan?: StringWithAggregatesFilter<"Pharmacy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
  }

  export type PharmacyStaffWhereInput = {
    AND?: PharmacyStaffWhereInput | PharmacyStaffWhereInput[]
    OR?: PharmacyStaffWhereInput[]
    NOT?: PharmacyStaffWhereInput | PharmacyStaffWhereInput[]
    id?: StringFilter<"PharmacyStaff"> | string
    pharmacyId?: StringFilter<"PharmacyStaff"> | string
    name?: StringFilter<"PharmacyStaff"> | string
    username?: StringFilter<"PharmacyStaff"> | string
    password?: StringFilter<"PharmacyStaff"> | string
    role?: StringFilter<"PharmacyStaff"> | string
    phone?: StringNullableFilter<"PharmacyStaff"> | string | null
    isActive?: BoolFilter<"PharmacyStaff"> | boolean
    createdAt?: DateTimeFilter<"PharmacyStaff"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
  }

  export type PharmacyStaffOrderByWithRelationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    pharmacy?: PharmacyOrderByWithRelationInput
  }

  export type PharmacyStaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: PharmacyStaffWhereInput | PharmacyStaffWhereInput[]
    OR?: PharmacyStaffWhereInput[]
    NOT?: PharmacyStaffWhereInput | PharmacyStaffWhereInput[]
    pharmacyId?: StringFilter<"PharmacyStaff"> | string
    name?: StringFilter<"PharmacyStaff"> | string
    password?: StringFilter<"PharmacyStaff"> | string
    role?: StringFilter<"PharmacyStaff"> | string
    phone?: StringNullableFilter<"PharmacyStaff"> | string | null
    isActive?: BoolFilter<"PharmacyStaff"> | boolean
    createdAt?: DateTimeFilter<"PharmacyStaff"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
  }, "id" | "username">

  export type PharmacyStaffOrderByWithAggregationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: PharmacyStaffCountOrderByAggregateInput
    _max?: PharmacyStaffMaxOrderByAggregateInput
    _min?: PharmacyStaffMinOrderByAggregateInput
  }

  export type PharmacyStaffScalarWhereWithAggregatesInput = {
    AND?: PharmacyStaffScalarWhereWithAggregatesInput | PharmacyStaffScalarWhereWithAggregatesInput[]
    OR?: PharmacyStaffScalarWhereWithAggregatesInput[]
    NOT?: PharmacyStaffScalarWhereWithAggregatesInput | PharmacyStaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PharmacyStaff"> | string
    pharmacyId?: StringWithAggregatesFilter<"PharmacyStaff"> | string
    name?: StringWithAggregatesFilter<"PharmacyStaff"> | string
    username?: StringWithAggregatesFilter<"PharmacyStaff"> | string
    password?: StringWithAggregatesFilter<"PharmacyStaff"> | string
    role?: StringWithAggregatesFilter<"PharmacyStaff"> | string
    phone?: StringNullableWithAggregatesFilter<"PharmacyStaff"> | string | null
    isActive?: BoolWithAggregatesFilter<"PharmacyStaff"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PharmacyStaff"> | Date | string
  }

  export type CourierWhereInput = {
    AND?: CourierWhereInput | CourierWhereInput[]
    OR?: CourierWhereInput[]
    NOT?: CourierWhereInput | CourierWhereInput[]
    id?: StringFilter<"Courier"> | string
    pharmacyId?: StringFilter<"Courier"> | string
    name?: StringFilter<"Courier"> | string
    phone?: StringFilter<"Courier"> | string
    vehicleType?: StringFilter<"Courier"> | string
    isAvailable?: BoolFilter<"Courier"> | boolean
    currentLat?: FloatNullableFilter<"Courier"> | number | null
    currentLng?: FloatNullableFilter<"Courier"> | number | null
    totalOrders?: IntFilter<"Courier"> | number
    createdAt?: DateTimeFilter<"Courier"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
    orders?: OrderListRelationFilter
  }

  export type CourierOrderByWithRelationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    currentLat?: SortOrderInput | SortOrder
    currentLng?: SortOrderInput | SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    pharmacy?: PharmacyOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type CourierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourierWhereInput | CourierWhereInput[]
    OR?: CourierWhereInput[]
    NOT?: CourierWhereInput | CourierWhereInput[]
    pharmacyId?: StringFilter<"Courier"> | string
    name?: StringFilter<"Courier"> | string
    phone?: StringFilter<"Courier"> | string
    vehicleType?: StringFilter<"Courier"> | string
    isAvailable?: BoolFilter<"Courier"> | boolean
    currentLat?: FloatNullableFilter<"Courier"> | number | null
    currentLng?: FloatNullableFilter<"Courier"> | number | null
    totalOrders?: IntFilter<"Courier"> | number
    createdAt?: DateTimeFilter<"Courier"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type CourierOrderByWithAggregationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    currentLat?: SortOrderInput | SortOrder
    currentLng?: SortOrderInput | SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    _count?: CourierCountOrderByAggregateInput
    _avg?: CourierAvgOrderByAggregateInput
    _max?: CourierMaxOrderByAggregateInput
    _min?: CourierMinOrderByAggregateInput
    _sum?: CourierSumOrderByAggregateInput
  }

  export type CourierScalarWhereWithAggregatesInput = {
    AND?: CourierScalarWhereWithAggregatesInput | CourierScalarWhereWithAggregatesInput[]
    OR?: CourierScalarWhereWithAggregatesInput[]
    NOT?: CourierScalarWhereWithAggregatesInput | CourierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Courier"> | string
    pharmacyId?: StringWithAggregatesFilter<"Courier"> | string
    name?: StringWithAggregatesFilter<"Courier"> | string
    phone?: StringWithAggregatesFilter<"Courier"> | string
    vehicleType?: StringWithAggregatesFilter<"Courier"> | string
    isAvailable?: BoolWithAggregatesFilter<"Courier"> | boolean
    currentLat?: FloatNullableWithAggregatesFilter<"Courier"> | number | null
    currentLng?: FloatNullableWithAggregatesFilter<"Courier"> | number | null
    totalOrders?: IntWithAggregatesFilter<"Courier"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Courier"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    city?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    lat?: FloatNullableFilter<"Customer"> | number | null
    lng?: FloatNullableFilter<"Customer"> | number | null
    allergies?: StringNullableFilter<"Customer"> | string | null
    chronicDiseases?: StringNullableFilter<"Customer"> | string | null
    totalOrders?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    orders?: OrderListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
    labReports?: LabReportListRelationFilter
    shortageRequests?: ShortageRequestListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    chronicDiseases?: SortOrderInput | SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    labReports?: LabReportOrderByRelationAggregateInput
    shortageRequests?: ShortageRequestOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    city?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    lat?: FloatNullableFilter<"Customer"> | number | null
    lng?: FloatNullableFilter<"Customer"> | number | null
    allergies?: StringNullableFilter<"Customer"> | string | null
    chronicDiseases?: StringNullableFilter<"Customer"> | string | null
    totalOrders?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    orders?: OrderListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
    labReports?: LabReportListRelationFilter
    shortageRequests?: ShortageRequestListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    chronicDiseases?: SortOrderInput | SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Customer"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Customer"> | number | null
    allergies?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    chronicDiseases?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    totalOrders?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: StringFilter<"Medicine"> | string
    tradeNameAr?: StringFilter<"Medicine"> | string
    tradeNameEn?: StringFilter<"Medicine"> | string
    genericName?: StringFilter<"Medicine"> | string
    strength?: StringNullableFilter<"Medicine"> | string | null
    dosageForm?: StringFilter<"Medicine"> | string
    category?: StringFilter<"Medicine"> | string
    officialPrice?: FloatFilter<"Medicine"> | number
    manufacturer?: StringNullableFilter<"Medicine"> | string | null
    barcode?: StringNullableFilter<"Medicine"> | string | null
    image?: StringNullableFilter<"Medicine"> | string | null
    requiresPrescription?: BoolFilter<"Medicine"> | boolean
    isShortage?: BoolFilter<"Medicine"> | boolean
    alternatives?: StringNullableFilter<"Medicine"> | string | null
    description?: StringNullableFilter<"Medicine"> | string | null
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    inventory?: PharmacyInventoryListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    tradeNameAr?: SortOrder
    tradeNameEn?: SortOrder
    genericName?: SortOrder
    strength?: SortOrderInput | SortOrder
    dosageForm?: SortOrder
    category?: SortOrder
    officialPrice?: SortOrder
    manufacturer?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    requiresPrescription?: SortOrder
    isShortage?: SortOrder
    alternatives?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    inventory?: PharmacyInventoryOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    tradeNameAr?: StringFilter<"Medicine"> | string
    tradeNameEn?: StringFilter<"Medicine"> | string
    genericName?: StringFilter<"Medicine"> | string
    strength?: StringNullableFilter<"Medicine"> | string | null
    dosageForm?: StringFilter<"Medicine"> | string
    category?: StringFilter<"Medicine"> | string
    officialPrice?: FloatFilter<"Medicine"> | number
    manufacturer?: StringNullableFilter<"Medicine"> | string | null
    barcode?: StringNullableFilter<"Medicine"> | string | null
    image?: StringNullableFilter<"Medicine"> | string | null
    requiresPrescription?: BoolFilter<"Medicine"> | boolean
    isShortage?: BoolFilter<"Medicine"> | boolean
    alternatives?: StringNullableFilter<"Medicine"> | string | null
    description?: StringNullableFilter<"Medicine"> | string | null
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    inventory?: PharmacyInventoryListRelationFilter
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    tradeNameAr?: SortOrder
    tradeNameEn?: SortOrder
    genericName?: SortOrder
    strength?: SortOrderInput | SortOrder
    dosageForm?: SortOrder
    category?: SortOrder
    officialPrice?: SortOrder
    manufacturer?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    requiresPrescription?: SortOrder
    isShortage?: SortOrder
    alternatives?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medicine"> | string
    tradeNameAr?: StringWithAggregatesFilter<"Medicine"> | string
    tradeNameEn?: StringWithAggregatesFilter<"Medicine"> | string
    genericName?: StringWithAggregatesFilter<"Medicine"> | string
    strength?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    dosageForm?: StringWithAggregatesFilter<"Medicine"> | string
    category?: StringWithAggregatesFilter<"Medicine"> | string
    officialPrice?: FloatWithAggregatesFilter<"Medicine"> | number
    manufacturer?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    barcode?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    image?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    requiresPrescription?: BoolWithAggregatesFilter<"Medicine"> | boolean
    isShortage?: BoolWithAggregatesFilter<"Medicine"> | boolean
    alternatives?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    description?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
  }

  export type PharmacyInventoryWhereInput = {
    AND?: PharmacyInventoryWhereInput | PharmacyInventoryWhereInput[]
    OR?: PharmacyInventoryWhereInput[]
    NOT?: PharmacyInventoryWhereInput | PharmacyInventoryWhereInput[]
    id?: StringFilter<"PharmacyInventory"> | string
    pharmacyId?: StringFilter<"PharmacyInventory"> | string
    medicineId?: StringFilter<"PharmacyInventory"> | string
    stockQuantity?: IntFilter<"PharmacyInventory"> | number
    price?: FloatFilter<"PharmacyInventory"> | number
    isAvailable?: BoolFilter<"PharmacyInventory"> | boolean
    expiryDate?: StringNullableFilter<"PharmacyInventory"> | string | null
    updatedAt?: DateTimeFilter<"PharmacyInventory"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }

  export type PharmacyInventoryOrderByWithRelationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineId?: SortOrder
    stockQuantity?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    pharmacy?: PharmacyOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
  }

  export type PharmacyInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pharmacyId_medicineId?: PharmacyInventoryPharmacyIdMedicineIdCompoundUniqueInput
    AND?: PharmacyInventoryWhereInput | PharmacyInventoryWhereInput[]
    OR?: PharmacyInventoryWhereInput[]
    NOT?: PharmacyInventoryWhereInput | PharmacyInventoryWhereInput[]
    pharmacyId?: StringFilter<"PharmacyInventory"> | string
    medicineId?: StringFilter<"PharmacyInventory"> | string
    stockQuantity?: IntFilter<"PharmacyInventory"> | number
    price?: FloatFilter<"PharmacyInventory"> | number
    isAvailable?: BoolFilter<"PharmacyInventory"> | boolean
    expiryDate?: StringNullableFilter<"PharmacyInventory"> | string | null
    updatedAt?: DateTimeFilter<"PharmacyInventory"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }, "id" | "pharmacyId_medicineId">

  export type PharmacyInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineId?: SortOrder
    stockQuantity?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PharmacyInventoryCountOrderByAggregateInput
    _avg?: PharmacyInventoryAvgOrderByAggregateInput
    _max?: PharmacyInventoryMaxOrderByAggregateInput
    _min?: PharmacyInventoryMinOrderByAggregateInput
    _sum?: PharmacyInventorySumOrderByAggregateInput
  }

  export type PharmacyInventoryScalarWhereWithAggregatesInput = {
    AND?: PharmacyInventoryScalarWhereWithAggregatesInput | PharmacyInventoryScalarWhereWithAggregatesInput[]
    OR?: PharmacyInventoryScalarWhereWithAggregatesInput[]
    NOT?: PharmacyInventoryScalarWhereWithAggregatesInput | PharmacyInventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PharmacyInventory"> | string
    pharmacyId?: StringWithAggregatesFilter<"PharmacyInventory"> | string
    medicineId?: StringWithAggregatesFilter<"PharmacyInventory"> | string
    stockQuantity?: IntWithAggregatesFilter<"PharmacyInventory"> | number
    price?: FloatWithAggregatesFilter<"PharmacyInventory"> | number
    isAvailable?: BoolWithAggregatesFilter<"PharmacyInventory"> | boolean
    expiryDate?: StringNullableWithAggregatesFilter<"PharmacyInventory"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"PharmacyInventory"> | Date | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: StringFilter<"Prescription"> | string
    customerId?: StringNullableFilter<"Prescription"> | string | null
    pharmacyId?: StringNullableFilter<"Prescription"> | string | null
    imageUrl?: StringFilter<"Prescription"> | string
    rawOcrText?: StringNullableFilter<"Prescription"> | string | null
    parsedMedicines?: StringFilter<"Prescription"> | string
    doctorSpecialty?: StringNullableFilter<"Prescription"> | string | null
    aiConfidence?: FloatFilter<"Prescription"> | number
    status?: StringFilter<"Prescription"> | string
    notes?: StringNullableFilter<"Prescription"> | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    pharmacyId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    rawOcrText?: SortOrderInput | SortOrder
    parsedMedicines?: SortOrder
    doctorSpecialty?: SortOrderInput | SortOrder
    aiConfidence?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    pharmacy?: PharmacyOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    customerId?: StringNullableFilter<"Prescription"> | string | null
    pharmacyId?: StringNullableFilter<"Prescription"> | string | null
    imageUrl?: StringFilter<"Prescription"> | string
    rawOcrText?: StringNullableFilter<"Prescription"> | string | null
    parsedMedicines?: StringFilter<"Prescription"> | string
    doctorSpecialty?: StringNullableFilter<"Prescription"> | string | null
    aiConfidence?: FloatFilter<"Prescription"> | number
    status?: StringFilter<"Prescription"> | string
    notes?: StringNullableFilter<"Prescription"> | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    pharmacyId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    rawOcrText?: SortOrderInput | SortOrder
    parsedMedicines?: SortOrder
    doctorSpecialty?: SortOrderInput | SortOrder
    aiConfidence?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _avg?: PrescriptionAvgOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
    _sum?: PrescriptionSumOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prescription"> | string
    customerId?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    pharmacyId?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    imageUrl?: StringWithAggregatesFilter<"Prescription"> | string
    rawOcrText?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    parsedMedicines?: StringWithAggregatesFilter<"Prescription"> | string
    doctorSpecialty?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    aiConfidence?: FloatWithAggregatesFilter<"Prescription"> | number
    status?: StringWithAggregatesFilter<"Prescription"> | string
    notes?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
  }

  export type LabReportWhereInput = {
    AND?: LabReportWhereInput | LabReportWhereInput[]
    OR?: LabReportWhereInput[]
    NOT?: LabReportWhereInput | LabReportWhereInput[]
    id?: StringFilter<"LabReport"> | string
    customerId?: StringNullableFilter<"LabReport"> | string | null
    imageUrl?: StringFilter<"LabReport"> | string
    testType?: StringFilter<"LabReport"> | string
    rawOcrText?: StringNullableFilter<"LabReport"> | string | null
    simplifiedAnalysisAr?: StringFilter<"LabReport"> | string
    abnormalValues?: StringFilter<"LabReport"> | string
    doctorAdviceQuestions?: StringNullableFilter<"LabReport"> | string | null
    suggestedVitamins?: StringNullableFilter<"LabReport"> | string | null
    createdAt?: DateTimeFilter<"LabReport"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type LabReportOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    testType?: SortOrder
    rawOcrText?: SortOrderInput | SortOrder
    simplifiedAnalysisAr?: SortOrder
    abnormalValues?: SortOrder
    doctorAdviceQuestions?: SortOrderInput | SortOrder
    suggestedVitamins?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type LabReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabReportWhereInput | LabReportWhereInput[]
    OR?: LabReportWhereInput[]
    NOT?: LabReportWhereInput | LabReportWhereInput[]
    customerId?: StringNullableFilter<"LabReport"> | string | null
    imageUrl?: StringFilter<"LabReport"> | string
    testType?: StringFilter<"LabReport"> | string
    rawOcrText?: StringNullableFilter<"LabReport"> | string | null
    simplifiedAnalysisAr?: StringFilter<"LabReport"> | string
    abnormalValues?: StringFilter<"LabReport"> | string
    doctorAdviceQuestions?: StringNullableFilter<"LabReport"> | string | null
    suggestedVitamins?: StringNullableFilter<"LabReport"> | string | null
    createdAt?: DateTimeFilter<"LabReport"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id">

  export type LabReportOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    testType?: SortOrder
    rawOcrText?: SortOrderInput | SortOrder
    simplifiedAnalysisAr?: SortOrder
    abnormalValues?: SortOrder
    doctorAdviceQuestions?: SortOrderInput | SortOrder
    suggestedVitamins?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LabReportCountOrderByAggregateInput
    _max?: LabReportMaxOrderByAggregateInput
    _min?: LabReportMinOrderByAggregateInput
  }

  export type LabReportScalarWhereWithAggregatesInput = {
    AND?: LabReportScalarWhereWithAggregatesInput | LabReportScalarWhereWithAggregatesInput[]
    OR?: LabReportScalarWhereWithAggregatesInput[]
    NOT?: LabReportScalarWhereWithAggregatesInput | LabReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabReport"> | string
    customerId?: StringNullableWithAggregatesFilter<"LabReport"> | string | null
    imageUrl?: StringWithAggregatesFilter<"LabReport"> | string
    testType?: StringWithAggregatesFilter<"LabReport"> | string
    rawOcrText?: StringNullableWithAggregatesFilter<"LabReport"> | string | null
    simplifiedAnalysisAr?: StringWithAggregatesFilter<"LabReport"> | string
    abnormalValues?: StringWithAggregatesFilter<"LabReport"> | string
    doctorAdviceQuestions?: StringNullableWithAggregatesFilter<"LabReport"> | string | null
    suggestedVitamins?: StringNullableWithAggregatesFilter<"LabReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LabReport"> | Date | string
  }

  export type ShortageRequestWhereInput = {
    AND?: ShortageRequestWhereInput | ShortageRequestWhereInput[]
    OR?: ShortageRequestWhereInput[]
    NOT?: ShortageRequestWhereInput | ShortageRequestWhereInput[]
    id?: StringFilter<"ShortageRequest"> | string
    customerId?: StringNullableFilter<"ShortageRequest"> | string | null
    medicineName?: StringFilter<"ShortageRequest"> | string
    genericName?: StringNullableFilter<"ShortageRequest"> | string | null
    customerCity?: StringFilter<"ShortageRequest"> | string
    governorate?: StringFilter<"ShortageRequest"> | string
    quantityNeeded?: IntFilter<"ShortageRequest"> | number
    urgency?: StringFilter<"ShortageRequest"> | string
    status?: StringFilter<"ShortageRequest"> | string
    foundPharmacyId?: StringNullableFilter<"ShortageRequest"> | string | null
    reservationExpiry?: DateTimeNullableFilter<"ShortageRequest"> | Date | string | null
    notes?: StringNullableFilter<"ShortageRequest"> | string | null
    createdAt?: DateTimeFilter<"ShortageRequest"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type ShortageRequestOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    medicineName?: SortOrder
    genericName?: SortOrderInput | SortOrder
    customerCity?: SortOrder
    governorate?: SortOrder
    quantityNeeded?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    foundPharmacyId?: SortOrderInput | SortOrder
    reservationExpiry?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ShortageRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShortageRequestWhereInput | ShortageRequestWhereInput[]
    OR?: ShortageRequestWhereInput[]
    NOT?: ShortageRequestWhereInput | ShortageRequestWhereInput[]
    customerId?: StringNullableFilter<"ShortageRequest"> | string | null
    medicineName?: StringFilter<"ShortageRequest"> | string
    genericName?: StringNullableFilter<"ShortageRequest"> | string | null
    customerCity?: StringFilter<"ShortageRequest"> | string
    governorate?: StringFilter<"ShortageRequest"> | string
    quantityNeeded?: IntFilter<"ShortageRequest"> | number
    urgency?: StringFilter<"ShortageRequest"> | string
    status?: StringFilter<"ShortageRequest"> | string
    foundPharmacyId?: StringNullableFilter<"ShortageRequest"> | string | null
    reservationExpiry?: DateTimeNullableFilter<"ShortageRequest"> | Date | string | null
    notes?: StringNullableFilter<"ShortageRequest"> | string | null
    createdAt?: DateTimeFilter<"ShortageRequest"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id">

  export type ShortageRequestOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    medicineName?: SortOrder
    genericName?: SortOrderInput | SortOrder
    customerCity?: SortOrder
    governorate?: SortOrder
    quantityNeeded?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    foundPharmacyId?: SortOrderInput | SortOrder
    reservationExpiry?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ShortageRequestCountOrderByAggregateInput
    _avg?: ShortageRequestAvgOrderByAggregateInput
    _max?: ShortageRequestMaxOrderByAggregateInput
    _min?: ShortageRequestMinOrderByAggregateInput
    _sum?: ShortageRequestSumOrderByAggregateInput
  }

  export type ShortageRequestScalarWhereWithAggregatesInput = {
    AND?: ShortageRequestScalarWhereWithAggregatesInput | ShortageRequestScalarWhereWithAggregatesInput[]
    OR?: ShortageRequestScalarWhereWithAggregatesInput[]
    NOT?: ShortageRequestScalarWhereWithAggregatesInput | ShortageRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShortageRequest"> | string
    customerId?: StringNullableWithAggregatesFilter<"ShortageRequest"> | string | null
    medicineName?: StringWithAggregatesFilter<"ShortageRequest"> | string
    genericName?: StringNullableWithAggregatesFilter<"ShortageRequest"> | string | null
    customerCity?: StringWithAggregatesFilter<"ShortageRequest"> | string
    governorate?: StringWithAggregatesFilter<"ShortageRequest"> | string
    quantityNeeded?: IntWithAggregatesFilter<"ShortageRequest"> | number
    urgency?: StringWithAggregatesFilter<"ShortageRequest"> | string
    status?: StringWithAggregatesFilter<"ShortageRequest"> | string
    foundPharmacyId?: StringNullableWithAggregatesFilter<"ShortageRequest"> | string | null
    reservationExpiry?: DateTimeNullableWithAggregatesFilter<"ShortageRequest"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"ShortageRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShortageRequest"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    pharmacyId?: StringFilter<"Order"> | string
    customerId?: StringNullableFilter<"Order"> | string | null
    customerName?: StringFilter<"Order"> | string
    customerPhone?: StringFilter<"Order"> | string
    customerAddress?: StringFilter<"Order"> | string
    orderType?: StringFilter<"Order"> | string
    items?: StringFilter<"Order"> | string
    subtotal?: FloatFilter<"Order"> | number
    deliveryFee?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    paymentMethod?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    courierId?: StringNullableFilter<"Order"> | string | null
    prescriptionId?: StringNullableFilter<"Order"> | string | null
    shortageRequestId?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    courier?: XOR<CourierNullableScalarRelationFilter, CourierWhereInput> | null
    prescription?: XOR<PrescriptionNullableScalarRelationFilter, PrescriptionWhereInput> | null
    shortageRequest?: XOR<ShortageRequestNullableScalarRelationFilter, ShortageRequestWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    pharmacyId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    orderType?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    courierId?: SortOrderInput | SortOrder
    prescriptionId?: SortOrderInput | SortOrder
    shortageRequestId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pharmacy?: PharmacyOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    courier?: CourierOrderByWithRelationInput
    prescription?: PrescriptionOrderByWithRelationInput
    shortageRequest?: ShortageRequestOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    pharmacyId?: StringFilter<"Order"> | string
    customerId?: StringNullableFilter<"Order"> | string | null
    customerName?: StringFilter<"Order"> | string
    customerPhone?: StringFilter<"Order"> | string
    customerAddress?: StringFilter<"Order"> | string
    orderType?: StringFilter<"Order"> | string
    items?: StringFilter<"Order"> | string
    subtotal?: FloatFilter<"Order"> | number
    deliveryFee?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    paymentMethod?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    courierId?: StringNullableFilter<"Order"> | string | null
    prescriptionId?: StringNullableFilter<"Order"> | string | null
    shortageRequestId?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    courier?: XOR<CourierNullableScalarRelationFilter, CourierWhereInput> | null
    prescription?: XOR<PrescriptionNullableScalarRelationFilter, PrescriptionWhereInput> | null
    shortageRequest?: XOR<ShortageRequestNullableScalarRelationFilter, ShortageRequestWhereInput> | null
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    pharmacyId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    orderType?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    courierId?: SortOrderInput | SortOrder
    prescriptionId?: SortOrderInput | SortOrder
    shortageRequestId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    pharmacyId?: StringWithAggregatesFilter<"Order"> | string
    customerId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    customerName?: StringWithAggregatesFilter<"Order"> | string
    customerPhone?: StringWithAggregatesFilter<"Order"> | string
    customerAddress?: StringWithAggregatesFilter<"Order"> | string
    orderType?: StringWithAggregatesFilter<"Order"> | string
    items?: StringWithAggregatesFilter<"Order"> | string
    subtotal?: FloatWithAggregatesFilter<"Order"> | number
    deliveryFee?: FloatWithAggregatesFilter<"Order"> | number
    totalAmount?: FloatWithAggregatesFilter<"Order"> | number
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    courierId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    prescriptionId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shortageRequestId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type PharmacyCreateInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffCreateNestedManyWithoutPharmacyInput
    inventory?: PharmacyInventoryCreateNestedManyWithoutPharmacyInput
    couriers?: CourierCreateNestedManyWithoutPharmacyInput
    orders?: OrderCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffUncheckedCreateNestedManyWithoutPharmacyInput
    inventory?: PharmacyInventoryUncheckedCreateNestedManyWithoutPharmacyInput
    couriers?: CourierUncheckedCreateNestedManyWithoutPharmacyInput
    orders?: OrderUncheckedCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUpdateManyWithoutPharmacyNestedInput
    inventory?: PharmacyInventoryUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUncheckedUpdateManyWithoutPharmacyNestedInput
    inventory?: PharmacyInventoryUncheckedUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyCreateManyInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PharmacyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyStaffCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutStaffInput
  }

  export type PharmacyStaffUncheckedCreateInput = {
    id?: string
    pharmacyId: string
    name: string
    username: string
    password: string
    role?: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PharmacyStaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutStaffNestedInput
  }

  export type PharmacyStaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyStaffCreateManyInput = {
    id?: string
    pharmacyId: string
    name: string
    username: string
    password: string
    role?: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PharmacyStaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyStaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierCreateInput = {
    id?: string
    name: string
    phone: string
    vehicleType?: string
    isAvailable?: boolean
    currentLat?: number | null
    currentLng?: number | null
    totalOrders?: number
    createdAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutCouriersInput
    orders?: OrderCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateInput = {
    id?: string
    pharmacyId: string
    name: string
    phone: string
    vehicleType?: string
    isAvailable?: boolean
    currentLat?: number | null
    currentLng?: number | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutCouriersNestedInput
    orders?: OrderUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type CourierCreateManyInput = {
    id?: string
    pharmacyId: string
    name: string
    phone: string
    vehicleType?: string
    isAvailable?: boolean
    currentLat?: number | null
    currentLng?: number | null
    totalOrders?: number
    createdAt?: Date | string
  }

  export type CourierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    prescriptions?: PrescriptionCreateNestedManyWithoutCustomerInput
    labReports?: LabReportCreateNestedManyWithoutCustomerInput
    shortageRequests?: ShortageRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutCustomerInput
    labReports?: LabReportUncheckedCreateNestedManyWithoutCustomerInput
    shortageRequests?: ShortageRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutCustomerNestedInput
    labReports?: LabReportUpdateManyWithoutCustomerNestedInput
    shortageRequests?: ShortageRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutCustomerNestedInput
    labReports?: LabReportUncheckedUpdateManyWithoutCustomerNestedInput
    shortageRequests?: ShortageRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineCreateInput = {
    id?: string
    tradeNameAr: string
    tradeNameEn: string
    genericName: string
    strength?: string | null
    dosageForm: string
    category: string
    officialPrice: number
    manufacturer?: string | null
    barcode?: string | null
    image?: string | null
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: string | null
    description?: string | null
    createdAt?: Date | string
    inventory?: PharmacyInventoryCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: string
    tradeNameAr: string
    tradeNameEn: string
    genericName: string
    strength?: string | null
    dosageForm: string
    category: string
    officialPrice: number
    manufacturer?: string | null
    barcode?: string | null
    image?: string | null
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: string | null
    description?: string | null
    createdAt?: Date | string
    inventory?: PharmacyInventoryUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNameAr?: StringFieldUpdateOperationsInput | string
    tradeNameEn?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    dosageForm?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    officialPrice?: FloatFieldUpdateOperationsInput | number
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    isShortage?: BoolFieldUpdateOperationsInput | boolean
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: PharmacyInventoryUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNameAr?: StringFieldUpdateOperationsInput | string
    tradeNameEn?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    dosageForm?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    officialPrice?: FloatFieldUpdateOperationsInput | number
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    isShortage?: BoolFieldUpdateOperationsInput | boolean
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: PharmacyInventoryUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: string
    tradeNameAr: string
    tradeNameEn: string
    genericName: string
    strength?: string | null
    dosageForm: string
    category: string
    officialPrice: number
    manufacturer?: string | null
    barcode?: string | null
    image?: string | null
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type MedicineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNameAr?: StringFieldUpdateOperationsInput | string
    tradeNameEn?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    dosageForm?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    officialPrice?: FloatFieldUpdateOperationsInput | number
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    isShortage?: BoolFieldUpdateOperationsInput | boolean
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNameAr?: StringFieldUpdateOperationsInput | string
    tradeNameEn?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    dosageForm?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    officialPrice?: FloatFieldUpdateOperationsInput | number
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    isShortage?: BoolFieldUpdateOperationsInput | boolean
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyInventoryCreateInput = {
    id?: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutInventoryInput
    medicine: MedicineCreateNestedOneWithoutInventoryInput
  }

  export type PharmacyInventoryUncheckedCreateInput = {
    id?: string
    pharmacyId: string
    medicineId: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
  }

  export type PharmacyInventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutInventoryNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type PharmacyInventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyInventoryCreateManyInput = {
    id?: string
    pharmacyId: string
    medicineId: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
  }

  export type PharmacyInventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyInventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateInput = {
    id?: string
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutPrescriptionsInput
    pharmacy?: PharmacyCreateNestedOneWithoutPrescriptionsInput
    orders?: OrderCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    customerId?: string | null
    pharmacyId?: string | null
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutPrescriptionsNestedInput
    pharmacy?: PharmacyUpdateOneWithoutPrescriptionsNestedInput
    orders?: OrderUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    customerId?: string | null
    pharmacyId?: string | null
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportCreateInput = {
    id?: string
    imageUrl: string
    testType?: string
    rawOcrText?: string | null
    simplifiedAnalysisAr: string
    abnormalValues: string
    doctorAdviceQuestions?: string | null
    suggestedVitamins?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutLabReportsInput
  }

  export type LabReportUncheckedCreateInput = {
    id?: string
    customerId?: string | null
    imageUrl: string
    testType?: string
    rawOcrText?: string | null
    simplifiedAnalysisAr: string
    abnormalValues: string
    doctorAdviceQuestions?: string | null
    suggestedVitamins?: string | null
    createdAt?: Date | string
  }

  export type LabReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    simplifiedAnalysisAr?: StringFieldUpdateOperationsInput | string
    abnormalValues?: StringFieldUpdateOperationsInput | string
    doctorAdviceQuestions?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedVitamins?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutLabReportsNestedInput
  }

  export type LabReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    simplifiedAnalysisAr?: StringFieldUpdateOperationsInput | string
    abnormalValues?: StringFieldUpdateOperationsInput | string
    doctorAdviceQuestions?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedVitamins?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportCreateManyInput = {
    id?: string
    customerId?: string | null
    imageUrl: string
    testType?: string
    rawOcrText?: string | null
    simplifiedAnalysisAr: string
    abnormalValues: string
    doctorAdviceQuestions?: string | null
    suggestedVitamins?: string | null
    createdAt?: Date | string
  }

  export type LabReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    simplifiedAnalysisAr?: StringFieldUpdateOperationsInput | string
    abnormalValues?: StringFieldUpdateOperationsInput | string
    doctorAdviceQuestions?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedVitamins?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    simplifiedAnalysisAr?: StringFieldUpdateOperationsInput | string
    abnormalValues?: StringFieldUpdateOperationsInput | string
    doctorAdviceQuestions?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedVitamins?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortageRequestCreateInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    customerCity: string
    governorate: string
    quantityNeeded?: number
    urgency?: string
    status?: string
    foundPharmacyId?: string | null
    reservationExpiry?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutShortageRequestsInput
    orders?: OrderCreateNestedManyWithoutShortageRequestInput
  }

  export type ShortageRequestUncheckedCreateInput = {
    id?: string
    customerId?: string | null
    medicineName: string
    genericName?: string | null
    customerCity: string
    governorate: string
    quantityNeeded?: number
    urgency?: string
    status?: string
    foundPharmacyId?: string | null
    reservationExpiry?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutShortageRequestInput
  }

  export type ShortageRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutShortageRequestsNestedInput
    orders?: OrderUpdateManyWithoutShortageRequestNestedInput
  }

  export type ShortageRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutShortageRequestNestedInput
  }

  export type ShortageRequestCreateManyInput = {
    id?: string
    customerId?: string | null
    medicineName: string
    genericName?: string | null
    customerCity: string
    governorate: string
    quantityNeeded?: number
    urgency?: string
    status?: string
    foundPharmacyId?: string | null
    reservationExpiry?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ShortageRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortageRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    courier?: CourierCreateNestedOneWithoutOrdersInput
    prescription?: PrescriptionCreateNestedOneWithoutOrdersInput
    shortageRequest?: ShortageRequestCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    prescriptionId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    courier?: CourierUpdateOneWithoutOrdersNestedInput
    prescription?: PrescriptionUpdateOneWithoutOrdersNestedInput
    shortageRequest?: ShortageRequestUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    prescriptionId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PharmacyStaffListRelationFilter = {
    every?: PharmacyStaffWhereInput
    some?: PharmacyStaffWhereInput
    none?: PharmacyStaffWhereInput
  }

  export type PharmacyInventoryListRelationFilter = {
    every?: PharmacyInventoryWhereInput
    some?: PharmacyInventoryWhereInput
    none?: PharmacyInventoryWhereInput
  }

  export type CourierListRelationFilter = {
    every?: CourierWhereInput
    some?: CourierWhereInput
    none?: CourierWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PharmacyStaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PharmacyInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PharmacyCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    licenseNumber?: SortOrder
    ownerName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    rating?: SortOrder
    isOpen?: SortOrder
    deliveryAvailable?: SortOrder
    deliveryFee?: SortOrder
    deliveryTimeEstimate?: SortOrder
    workingHours?: SortOrder
    isVerified?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    rating?: SortOrder
    deliveryFee?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    licenseNumber?: SortOrder
    ownerName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    rating?: SortOrder
    isOpen?: SortOrder
    deliveryAvailable?: SortOrder
    deliveryFee?: SortOrder
    deliveryTimeEstimate?: SortOrder
    workingHours?: SortOrder
    isVerified?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nameAr?: SortOrder
    nameEn?: SortOrder
    licenseNumber?: SortOrder
    ownerName?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    rating?: SortOrder
    isOpen?: SortOrder
    deliveryAvailable?: SortOrder
    deliveryFee?: SortOrder
    deliveryTimeEstimate?: SortOrder
    workingHours?: SortOrder
    isVerified?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacySumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    rating?: SortOrder
    deliveryFee?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PharmacyScalarRelationFilter = {
    is?: PharmacyWhereInput
    isNot?: PharmacyWhereInput
  }

  export type PharmacyStaffCountOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PharmacyStaffMaxOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PharmacyStaffMinOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
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

  export type CourierCountOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    currentLat?: SortOrder
    currentLng?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
  }

  export type CourierAvgOrderByAggregateInput = {
    currentLat?: SortOrder
    currentLng?: SortOrder
    totalOrders?: SortOrder
  }

  export type CourierMaxOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    currentLat?: SortOrder
    currentLng?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
  }

  export type CourierMinOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    currentLat?: SortOrder
    currentLng?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
  }

  export type CourierSumOrderByAggregateInput = {
    currentLat?: SortOrder
    currentLng?: SortOrder
    totalOrders?: SortOrder
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

  export type LabReportListRelationFilter = {
    every?: LabReportWhereInput
    some?: LabReportWhereInput
    none?: LabReportWhereInput
  }

  export type ShortageRequestListRelationFilter = {
    every?: ShortageRequestWhereInput
    some?: ShortageRequestWhereInput
    none?: ShortageRequestWhereInput
  }

  export type LabReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShortageRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    allergies?: SortOrder
    chronicDiseases?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    totalOrders?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    allergies?: SortOrder
    chronicDiseases?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    allergies?: SortOrder
    chronicDiseases?: SortOrder
    totalOrders?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    totalOrders?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    tradeNameAr?: SortOrder
    tradeNameEn?: SortOrder
    genericName?: SortOrder
    strength?: SortOrder
    dosageForm?: SortOrder
    category?: SortOrder
    officialPrice?: SortOrder
    manufacturer?: SortOrder
    barcode?: SortOrder
    image?: SortOrder
    requiresPrescription?: SortOrder
    isShortage?: SortOrder
    alternatives?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    officialPrice?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    tradeNameAr?: SortOrder
    tradeNameEn?: SortOrder
    genericName?: SortOrder
    strength?: SortOrder
    dosageForm?: SortOrder
    category?: SortOrder
    officialPrice?: SortOrder
    manufacturer?: SortOrder
    barcode?: SortOrder
    image?: SortOrder
    requiresPrescription?: SortOrder
    isShortage?: SortOrder
    alternatives?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    tradeNameAr?: SortOrder
    tradeNameEn?: SortOrder
    genericName?: SortOrder
    strength?: SortOrder
    dosageForm?: SortOrder
    category?: SortOrder
    officialPrice?: SortOrder
    manufacturer?: SortOrder
    barcode?: SortOrder
    image?: SortOrder
    requiresPrescription?: SortOrder
    isShortage?: SortOrder
    alternatives?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    officialPrice?: SortOrder
  }

  export type MedicineScalarRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type PharmacyInventoryPharmacyIdMedicineIdCompoundUniqueInput = {
    pharmacyId: string
    medicineId: string
  }

  export type PharmacyInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineId?: SortOrder
    stockQuantity?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    expiryDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyInventoryAvgOrderByAggregateInput = {
    stockQuantity?: SortOrder
    price?: SortOrder
  }

  export type PharmacyInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineId?: SortOrder
    stockQuantity?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    expiryDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineId?: SortOrder
    stockQuantity?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    expiryDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyInventorySumOrderByAggregateInput = {
    stockQuantity?: SortOrder
    price?: SortOrder
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type PharmacyNullableScalarRelationFilter = {
    is?: PharmacyWhereInput | null
    isNot?: PharmacyWhereInput | null
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    pharmacyId?: SortOrder
    imageUrl?: SortOrder
    rawOcrText?: SortOrder
    parsedMedicines?: SortOrder
    doctorSpecialty?: SortOrder
    aiConfidence?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PrescriptionAvgOrderByAggregateInput = {
    aiConfidence?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    pharmacyId?: SortOrder
    imageUrl?: SortOrder
    rawOcrText?: SortOrder
    parsedMedicines?: SortOrder
    doctorSpecialty?: SortOrder
    aiConfidence?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    pharmacyId?: SortOrder
    imageUrl?: SortOrder
    rawOcrText?: SortOrder
    parsedMedicines?: SortOrder
    doctorSpecialty?: SortOrder
    aiConfidence?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type PrescriptionSumOrderByAggregateInput = {
    aiConfidence?: SortOrder
  }

  export type LabReportCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    imageUrl?: SortOrder
    testType?: SortOrder
    rawOcrText?: SortOrder
    simplifiedAnalysisAr?: SortOrder
    abnormalValues?: SortOrder
    doctorAdviceQuestions?: SortOrder
    suggestedVitamins?: SortOrder
    createdAt?: SortOrder
  }

  export type LabReportMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    imageUrl?: SortOrder
    testType?: SortOrder
    rawOcrText?: SortOrder
    simplifiedAnalysisAr?: SortOrder
    abnormalValues?: SortOrder
    doctorAdviceQuestions?: SortOrder
    suggestedVitamins?: SortOrder
    createdAt?: SortOrder
  }

  export type LabReportMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    imageUrl?: SortOrder
    testType?: SortOrder
    rawOcrText?: SortOrder
    simplifiedAnalysisAr?: SortOrder
    abnormalValues?: SortOrder
    doctorAdviceQuestions?: SortOrder
    suggestedVitamins?: SortOrder
    createdAt?: SortOrder
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

  export type ShortageRequestCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    medicineName?: SortOrder
    genericName?: SortOrder
    customerCity?: SortOrder
    governorate?: SortOrder
    quantityNeeded?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    foundPharmacyId?: SortOrder
    reservationExpiry?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ShortageRequestAvgOrderByAggregateInput = {
    quantityNeeded?: SortOrder
  }

  export type ShortageRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    medicineName?: SortOrder
    genericName?: SortOrder
    customerCity?: SortOrder
    governorate?: SortOrder
    quantityNeeded?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    foundPharmacyId?: SortOrder
    reservationExpiry?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ShortageRequestMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    medicineName?: SortOrder
    genericName?: SortOrder
    customerCity?: SortOrder
    governorate?: SortOrder
    quantityNeeded?: SortOrder
    urgency?: SortOrder
    status?: SortOrder
    foundPharmacyId?: SortOrder
    reservationExpiry?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ShortageRequestSumOrderByAggregateInput = {
    quantityNeeded?: SortOrder
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

  export type CourierNullableScalarRelationFilter = {
    is?: CourierWhereInput | null
    isNot?: CourierWhereInput | null
  }

  export type PrescriptionNullableScalarRelationFilter = {
    is?: PrescriptionWhereInput | null
    isNot?: PrescriptionWhereInput | null
  }

  export type ShortageRequestNullableScalarRelationFilter = {
    is?: ShortageRequestWhereInput | null
    isNot?: ShortageRequestWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    pharmacyId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    orderType?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    courierId?: SortOrder
    prescriptionId?: SortOrder
    shortageRequestId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    pharmacyId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    orderType?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    courierId?: SortOrder
    prescriptionId?: SortOrder
    shortageRequestId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    pharmacyId?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerAddress?: SortOrder
    orderType?: SortOrder
    items?: SortOrder
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    courierId?: SortOrder
    prescriptionId?: SortOrder
    shortageRequestId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    subtotal?: SortOrder
    deliveryFee?: SortOrder
    totalAmount?: SortOrder
  }

  export type PharmacyStaffCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<PharmacyStaffCreateWithoutPharmacyInput, PharmacyStaffUncheckedCreateWithoutPharmacyInput> | PharmacyStaffCreateWithoutPharmacyInput[] | PharmacyStaffUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyStaffCreateOrConnectWithoutPharmacyInput | PharmacyStaffCreateOrConnectWithoutPharmacyInput[]
    createMany?: PharmacyStaffCreateManyPharmacyInputEnvelope
    connect?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
  }

  export type PharmacyInventoryCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<PharmacyInventoryCreateWithoutPharmacyInput, PharmacyInventoryUncheckedCreateWithoutPharmacyInput> | PharmacyInventoryCreateWithoutPharmacyInput[] | PharmacyInventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyInventoryCreateOrConnectWithoutPharmacyInput | PharmacyInventoryCreateOrConnectWithoutPharmacyInput[]
    createMany?: PharmacyInventoryCreateManyPharmacyInputEnvelope
    connect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
  }

  export type CourierCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<CourierCreateWithoutPharmacyInput, CourierUncheckedCreateWithoutPharmacyInput> | CourierCreateWithoutPharmacyInput[] | CourierUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutPharmacyInput | CourierCreateOrConnectWithoutPharmacyInput[]
    createMany?: CourierCreateManyPharmacyInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<OrderCreateWithoutPharmacyInput, OrderUncheckedCreateWithoutPharmacyInput> | OrderCreateWithoutPharmacyInput[] | OrderUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPharmacyInput | OrderCreateOrConnectWithoutPharmacyInput[]
    createMany?: OrderCreateManyPharmacyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput> | PrescriptionCreateWithoutPharmacyInput[] | PrescriptionUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacyInput | PrescriptionCreateOrConnectWithoutPharmacyInput[]
    createMany?: PrescriptionCreateManyPharmacyInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PharmacyStaffUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<PharmacyStaffCreateWithoutPharmacyInput, PharmacyStaffUncheckedCreateWithoutPharmacyInput> | PharmacyStaffCreateWithoutPharmacyInput[] | PharmacyStaffUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyStaffCreateOrConnectWithoutPharmacyInput | PharmacyStaffCreateOrConnectWithoutPharmacyInput[]
    createMany?: PharmacyStaffCreateManyPharmacyInputEnvelope
    connect?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
  }

  export type PharmacyInventoryUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<PharmacyInventoryCreateWithoutPharmacyInput, PharmacyInventoryUncheckedCreateWithoutPharmacyInput> | PharmacyInventoryCreateWithoutPharmacyInput[] | PharmacyInventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyInventoryCreateOrConnectWithoutPharmacyInput | PharmacyInventoryCreateOrConnectWithoutPharmacyInput[]
    createMany?: PharmacyInventoryCreateManyPharmacyInputEnvelope
    connect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
  }

  export type CourierUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<CourierCreateWithoutPharmacyInput, CourierUncheckedCreateWithoutPharmacyInput> | CourierCreateWithoutPharmacyInput[] | CourierUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutPharmacyInput | CourierCreateOrConnectWithoutPharmacyInput[]
    createMany?: CourierCreateManyPharmacyInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<OrderCreateWithoutPharmacyInput, OrderUncheckedCreateWithoutPharmacyInput> | OrderCreateWithoutPharmacyInput[] | OrderUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPharmacyInput | OrderCreateOrConnectWithoutPharmacyInput[]
    createMany?: OrderCreateManyPharmacyInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput> | PrescriptionCreateWithoutPharmacyInput[] | PrescriptionUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacyInput | PrescriptionCreateOrConnectWithoutPharmacyInput[]
    createMany?: PrescriptionCreateManyPharmacyInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PharmacyStaffUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<PharmacyStaffCreateWithoutPharmacyInput, PharmacyStaffUncheckedCreateWithoutPharmacyInput> | PharmacyStaffCreateWithoutPharmacyInput[] | PharmacyStaffUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyStaffCreateOrConnectWithoutPharmacyInput | PharmacyStaffCreateOrConnectWithoutPharmacyInput[]
    upsert?: PharmacyStaffUpsertWithWhereUniqueWithoutPharmacyInput | PharmacyStaffUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: PharmacyStaffCreateManyPharmacyInputEnvelope
    set?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
    disconnect?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
    delete?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
    connect?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
    update?: PharmacyStaffUpdateWithWhereUniqueWithoutPharmacyInput | PharmacyStaffUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: PharmacyStaffUpdateManyWithWhereWithoutPharmacyInput | PharmacyStaffUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: PharmacyStaffScalarWhereInput | PharmacyStaffScalarWhereInput[]
  }

  export type PharmacyInventoryUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<PharmacyInventoryCreateWithoutPharmacyInput, PharmacyInventoryUncheckedCreateWithoutPharmacyInput> | PharmacyInventoryCreateWithoutPharmacyInput[] | PharmacyInventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyInventoryCreateOrConnectWithoutPharmacyInput | PharmacyInventoryCreateOrConnectWithoutPharmacyInput[]
    upsert?: PharmacyInventoryUpsertWithWhereUniqueWithoutPharmacyInput | PharmacyInventoryUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: PharmacyInventoryCreateManyPharmacyInputEnvelope
    set?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    disconnect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    delete?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    connect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    update?: PharmacyInventoryUpdateWithWhereUniqueWithoutPharmacyInput | PharmacyInventoryUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: PharmacyInventoryUpdateManyWithWhereWithoutPharmacyInput | PharmacyInventoryUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: PharmacyInventoryScalarWhereInput | PharmacyInventoryScalarWhereInput[]
  }

  export type CourierUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<CourierCreateWithoutPharmacyInput, CourierUncheckedCreateWithoutPharmacyInput> | CourierCreateWithoutPharmacyInput[] | CourierUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutPharmacyInput | CourierCreateOrConnectWithoutPharmacyInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutPharmacyInput | CourierUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: CourierCreateManyPharmacyInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutPharmacyInput | CourierUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutPharmacyInput | CourierUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<OrderCreateWithoutPharmacyInput, OrderUncheckedCreateWithoutPharmacyInput> | OrderCreateWithoutPharmacyInput[] | OrderUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPharmacyInput | OrderCreateOrConnectWithoutPharmacyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPharmacyInput | OrderUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: OrderCreateManyPharmacyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPharmacyInput | OrderUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPharmacyInput | OrderUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput> | PrescriptionCreateWithoutPharmacyInput[] | PrescriptionUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacyInput | PrescriptionCreateOrConnectWithoutPharmacyInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPharmacyInput | PrescriptionUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: PrescriptionCreateManyPharmacyInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPharmacyInput | PrescriptionUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPharmacyInput | PrescriptionUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PharmacyStaffUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<PharmacyStaffCreateWithoutPharmacyInput, PharmacyStaffUncheckedCreateWithoutPharmacyInput> | PharmacyStaffCreateWithoutPharmacyInput[] | PharmacyStaffUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyStaffCreateOrConnectWithoutPharmacyInput | PharmacyStaffCreateOrConnectWithoutPharmacyInput[]
    upsert?: PharmacyStaffUpsertWithWhereUniqueWithoutPharmacyInput | PharmacyStaffUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: PharmacyStaffCreateManyPharmacyInputEnvelope
    set?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
    disconnect?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
    delete?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
    connect?: PharmacyStaffWhereUniqueInput | PharmacyStaffWhereUniqueInput[]
    update?: PharmacyStaffUpdateWithWhereUniqueWithoutPharmacyInput | PharmacyStaffUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: PharmacyStaffUpdateManyWithWhereWithoutPharmacyInput | PharmacyStaffUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: PharmacyStaffScalarWhereInput | PharmacyStaffScalarWhereInput[]
  }

  export type PharmacyInventoryUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<PharmacyInventoryCreateWithoutPharmacyInput, PharmacyInventoryUncheckedCreateWithoutPharmacyInput> | PharmacyInventoryCreateWithoutPharmacyInput[] | PharmacyInventoryUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyInventoryCreateOrConnectWithoutPharmacyInput | PharmacyInventoryCreateOrConnectWithoutPharmacyInput[]
    upsert?: PharmacyInventoryUpsertWithWhereUniqueWithoutPharmacyInput | PharmacyInventoryUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: PharmacyInventoryCreateManyPharmacyInputEnvelope
    set?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    disconnect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    delete?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    connect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    update?: PharmacyInventoryUpdateWithWhereUniqueWithoutPharmacyInput | PharmacyInventoryUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: PharmacyInventoryUpdateManyWithWhereWithoutPharmacyInput | PharmacyInventoryUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: PharmacyInventoryScalarWhereInput | PharmacyInventoryScalarWhereInput[]
  }

  export type CourierUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<CourierCreateWithoutPharmacyInput, CourierUncheckedCreateWithoutPharmacyInput> | CourierCreateWithoutPharmacyInput[] | CourierUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutPharmacyInput | CourierCreateOrConnectWithoutPharmacyInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutPharmacyInput | CourierUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: CourierCreateManyPharmacyInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutPharmacyInput | CourierUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutPharmacyInput | CourierUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<OrderCreateWithoutPharmacyInput, OrderUncheckedCreateWithoutPharmacyInput> | OrderCreateWithoutPharmacyInput[] | OrderUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPharmacyInput | OrderCreateOrConnectWithoutPharmacyInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPharmacyInput | OrderUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: OrderCreateManyPharmacyInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPharmacyInput | OrderUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPharmacyInput | OrderUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput> | PrescriptionCreateWithoutPharmacyInput[] | PrescriptionUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacyInput | PrescriptionCreateOrConnectWithoutPharmacyInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPharmacyInput | PrescriptionUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: PrescriptionCreateManyPharmacyInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPharmacyInput | PrescriptionUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPharmacyInput | PrescriptionUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PharmacyCreateNestedOneWithoutStaffInput = {
    create?: XOR<PharmacyCreateWithoutStaffInput, PharmacyUncheckedCreateWithoutStaffInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutStaffInput
    connect?: PharmacyWhereUniqueInput
  }

  export type PharmacyUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<PharmacyCreateWithoutStaffInput, PharmacyUncheckedCreateWithoutStaffInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutStaffInput
    upsert?: PharmacyUpsertWithoutStaffInput
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutStaffInput, PharmacyUpdateWithoutStaffInput>, PharmacyUncheckedUpdateWithoutStaffInput>
  }

  export type PharmacyCreateNestedOneWithoutCouriersInput = {
    create?: XOR<PharmacyCreateWithoutCouriersInput, PharmacyUncheckedCreateWithoutCouriersInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutCouriersInput
    connect?: PharmacyWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutCourierInput = {
    create?: XOR<OrderCreateWithoutCourierInput, OrderUncheckedCreateWithoutCourierInput> | OrderCreateWithoutCourierInput[] | OrderUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourierInput | OrderCreateOrConnectWithoutCourierInput[]
    createMany?: OrderCreateManyCourierInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCourierInput = {
    create?: XOR<OrderCreateWithoutCourierInput, OrderUncheckedCreateWithoutCourierInput> | OrderCreateWithoutCourierInput[] | OrderUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourierInput | OrderCreateOrConnectWithoutCourierInput[]
    createMany?: OrderCreateManyCourierInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PharmacyUpdateOneRequiredWithoutCouriersNestedInput = {
    create?: XOR<PharmacyCreateWithoutCouriersInput, PharmacyUncheckedCreateWithoutCouriersInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutCouriersInput
    upsert?: PharmacyUpsertWithoutCouriersInput
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutCouriersInput, PharmacyUpdateWithoutCouriersInput>, PharmacyUncheckedUpdateWithoutCouriersInput>
  }

  export type OrderUpdateManyWithoutCourierNestedInput = {
    create?: XOR<OrderCreateWithoutCourierInput, OrderUncheckedCreateWithoutCourierInput> | OrderCreateWithoutCourierInput[] | OrderUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourierInput | OrderCreateOrConnectWithoutCourierInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCourierInput | OrderUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: OrderCreateManyCourierInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCourierInput | OrderUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCourierInput | OrderUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: XOR<OrderCreateWithoutCourierInput, OrderUncheckedCreateWithoutCourierInput> | OrderCreateWithoutCourierInput[] | OrderUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourierInput | OrderCreateOrConnectWithoutCourierInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCourierInput | OrderUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: OrderCreateManyCourierInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCourierInput | OrderUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCourierInput | OrderUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PrescriptionCreateWithoutCustomerInput, PrescriptionUncheckedCreateWithoutCustomerInput> | PrescriptionCreateWithoutCustomerInput[] | PrescriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutCustomerInput | PrescriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: PrescriptionCreateManyCustomerInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type LabReportCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LabReportCreateWithoutCustomerInput, LabReportUncheckedCreateWithoutCustomerInput> | LabReportCreateWithoutCustomerInput[] | LabReportUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LabReportCreateOrConnectWithoutCustomerInput | LabReportCreateOrConnectWithoutCustomerInput[]
    createMany?: LabReportCreateManyCustomerInputEnvelope
    connect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
  }

  export type ShortageRequestCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShortageRequestCreateWithoutCustomerInput, ShortageRequestUncheckedCreateWithoutCustomerInput> | ShortageRequestCreateWithoutCustomerInput[] | ShortageRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShortageRequestCreateOrConnectWithoutCustomerInput | ShortageRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: ShortageRequestCreateManyCustomerInputEnvelope
    connect?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PrescriptionCreateWithoutCustomerInput, PrescriptionUncheckedCreateWithoutCustomerInput> | PrescriptionCreateWithoutCustomerInput[] | PrescriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutCustomerInput | PrescriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: PrescriptionCreateManyCustomerInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type LabReportUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LabReportCreateWithoutCustomerInput, LabReportUncheckedCreateWithoutCustomerInput> | LabReportCreateWithoutCustomerInput[] | LabReportUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LabReportCreateOrConnectWithoutCustomerInput | LabReportCreateOrConnectWithoutCustomerInput[]
    createMany?: LabReportCreateManyCustomerInputEnvelope
    connect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
  }

  export type ShortageRequestUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ShortageRequestCreateWithoutCustomerInput, ShortageRequestUncheckedCreateWithoutCustomerInput> | ShortageRequestCreateWithoutCustomerInput[] | ShortageRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShortageRequestCreateOrConnectWithoutCustomerInput | ShortageRequestCreateOrConnectWithoutCustomerInput[]
    createMany?: ShortageRequestCreateManyCustomerInputEnvelope
    connect?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PrescriptionCreateWithoutCustomerInput, PrescriptionUncheckedCreateWithoutCustomerInput> | PrescriptionCreateWithoutCustomerInput[] | PrescriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutCustomerInput | PrescriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutCustomerInput | PrescriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PrescriptionCreateManyCustomerInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutCustomerInput | PrescriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutCustomerInput | PrescriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type LabReportUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LabReportCreateWithoutCustomerInput, LabReportUncheckedCreateWithoutCustomerInput> | LabReportCreateWithoutCustomerInput[] | LabReportUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LabReportCreateOrConnectWithoutCustomerInput | LabReportCreateOrConnectWithoutCustomerInput[]
    upsert?: LabReportUpsertWithWhereUniqueWithoutCustomerInput | LabReportUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LabReportCreateManyCustomerInputEnvelope
    set?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    disconnect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    delete?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    connect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    update?: LabReportUpdateWithWhereUniqueWithoutCustomerInput | LabReportUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LabReportUpdateManyWithWhereWithoutCustomerInput | LabReportUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LabReportScalarWhereInput | LabReportScalarWhereInput[]
  }

  export type ShortageRequestUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShortageRequestCreateWithoutCustomerInput, ShortageRequestUncheckedCreateWithoutCustomerInput> | ShortageRequestCreateWithoutCustomerInput[] | ShortageRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShortageRequestCreateOrConnectWithoutCustomerInput | ShortageRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: ShortageRequestUpsertWithWhereUniqueWithoutCustomerInput | ShortageRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShortageRequestCreateManyCustomerInputEnvelope
    set?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
    disconnect?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
    delete?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
    connect?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
    update?: ShortageRequestUpdateWithWhereUniqueWithoutCustomerInput | ShortageRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShortageRequestUpdateManyWithWhereWithoutCustomerInput | ShortageRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShortageRequestScalarWhereInput | ShortageRequestScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PrescriptionCreateWithoutCustomerInput, PrescriptionUncheckedCreateWithoutCustomerInput> | PrescriptionCreateWithoutCustomerInput[] | PrescriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutCustomerInput | PrescriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutCustomerInput | PrescriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PrescriptionCreateManyCustomerInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutCustomerInput | PrescriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutCustomerInput | PrescriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type LabReportUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LabReportCreateWithoutCustomerInput, LabReportUncheckedCreateWithoutCustomerInput> | LabReportCreateWithoutCustomerInput[] | LabReportUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LabReportCreateOrConnectWithoutCustomerInput | LabReportCreateOrConnectWithoutCustomerInput[]
    upsert?: LabReportUpsertWithWhereUniqueWithoutCustomerInput | LabReportUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LabReportCreateManyCustomerInputEnvelope
    set?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    disconnect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    delete?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    connect?: LabReportWhereUniqueInput | LabReportWhereUniqueInput[]
    update?: LabReportUpdateWithWhereUniqueWithoutCustomerInput | LabReportUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LabReportUpdateManyWithWhereWithoutCustomerInput | LabReportUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LabReportScalarWhereInput | LabReportScalarWhereInput[]
  }

  export type ShortageRequestUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ShortageRequestCreateWithoutCustomerInput, ShortageRequestUncheckedCreateWithoutCustomerInput> | ShortageRequestCreateWithoutCustomerInput[] | ShortageRequestUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ShortageRequestCreateOrConnectWithoutCustomerInput | ShortageRequestCreateOrConnectWithoutCustomerInput[]
    upsert?: ShortageRequestUpsertWithWhereUniqueWithoutCustomerInput | ShortageRequestUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ShortageRequestCreateManyCustomerInputEnvelope
    set?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
    disconnect?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
    delete?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
    connect?: ShortageRequestWhereUniqueInput | ShortageRequestWhereUniqueInput[]
    update?: ShortageRequestUpdateWithWhereUniqueWithoutCustomerInput | ShortageRequestUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ShortageRequestUpdateManyWithWhereWithoutCustomerInput | ShortageRequestUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ShortageRequestScalarWhereInput | ShortageRequestScalarWhereInput[]
  }

  export type PharmacyInventoryCreateNestedManyWithoutMedicineInput = {
    create?: XOR<PharmacyInventoryCreateWithoutMedicineInput, PharmacyInventoryUncheckedCreateWithoutMedicineInput> | PharmacyInventoryCreateWithoutMedicineInput[] | PharmacyInventoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: PharmacyInventoryCreateOrConnectWithoutMedicineInput | PharmacyInventoryCreateOrConnectWithoutMedicineInput[]
    createMany?: PharmacyInventoryCreateManyMedicineInputEnvelope
    connect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
  }

  export type PharmacyInventoryUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<PharmacyInventoryCreateWithoutMedicineInput, PharmacyInventoryUncheckedCreateWithoutMedicineInput> | PharmacyInventoryCreateWithoutMedicineInput[] | PharmacyInventoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: PharmacyInventoryCreateOrConnectWithoutMedicineInput | PharmacyInventoryCreateOrConnectWithoutMedicineInput[]
    createMany?: PharmacyInventoryCreateManyMedicineInputEnvelope
    connect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
  }

  export type PharmacyInventoryUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<PharmacyInventoryCreateWithoutMedicineInput, PharmacyInventoryUncheckedCreateWithoutMedicineInput> | PharmacyInventoryCreateWithoutMedicineInput[] | PharmacyInventoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: PharmacyInventoryCreateOrConnectWithoutMedicineInput | PharmacyInventoryCreateOrConnectWithoutMedicineInput[]
    upsert?: PharmacyInventoryUpsertWithWhereUniqueWithoutMedicineInput | PharmacyInventoryUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: PharmacyInventoryCreateManyMedicineInputEnvelope
    set?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    disconnect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    delete?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    connect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    update?: PharmacyInventoryUpdateWithWhereUniqueWithoutMedicineInput | PharmacyInventoryUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: PharmacyInventoryUpdateManyWithWhereWithoutMedicineInput | PharmacyInventoryUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: PharmacyInventoryScalarWhereInput | PharmacyInventoryScalarWhereInput[]
  }

  export type PharmacyInventoryUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<PharmacyInventoryCreateWithoutMedicineInput, PharmacyInventoryUncheckedCreateWithoutMedicineInput> | PharmacyInventoryCreateWithoutMedicineInput[] | PharmacyInventoryUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: PharmacyInventoryCreateOrConnectWithoutMedicineInput | PharmacyInventoryCreateOrConnectWithoutMedicineInput[]
    upsert?: PharmacyInventoryUpsertWithWhereUniqueWithoutMedicineInput | PharmacyInventoryUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: PharmacyInventoryCreateManyMedicineInputEnvelope
    set?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    disconnect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    delete?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    connect?: PharmacyInventoryWhereUniqueInput | PharmacyInventoryWhereUniqueInput[]
    update?: PharmacyInventoryUpdateWithWhereUniqueWithoutMedicineInput | PharmacyInventoryUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: PharmacyInventoryUpdateManyWithWhereWithoutMedicineInput | PharmacyInventoryUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: PharmacyInventoryScalarWhereInput | PharmacyInventoryScalarWhereInput[]
  }

  export type PharmacyCreateNestedOneWithoutInventoryInput = {
    create?: XOR<PharmacyCreateWithoutInventoryInput, PharmacyUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutInventoryInput
    connect?: PharmacyWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutInventoryInput = {
    create?: XOR<MedicineCreateWithoutInventoryInput, MedicineUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInventoryInput
    connect?: MedicineWhereUniqueInput
  }

  export type PharmacyUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<PharmacyCreateWithoutInventoryInput, PharmacyUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutInventoryInput
    upsert?: PharmacyUpsertWithoutInventoryInput
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutInventoryInput, PharmacyUpdateWithoutInventoryInput>, PharmacyUncheckedUpdateWithoutInventoryInput>
  }

  export type MedicineUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<MedicineCreateWithoutInventoryInput, MedicineUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInventoryInput
    upsert?: MedicineUpsertWithoutInventoryInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutInventoryInput, MedicineUpdateWithoutInventoryInput>, MedicineUncheckedUpdateWithoutInventoryInput>
  }

  export type CustomerCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<CustomerCreateWithoutPrescriptionsInput, CustomerUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPrescriptionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type PharmacyCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<PharmacyCreateWithoutPrescriptionsInput, PharmacyUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutPrescriptionsInput
    connect?: PharmacyWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<OrderCreateWithoutPrescriptionInput, OrderUncheckedCreateWithoutPrescriptionInput> | OrderCreateWithoutPrescriptionInput[] | OrderUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPrescriptionInput | OrderCreateOrConnectWithoutPrescriptionInput[]
    createMany?: OrderCreateManyPrescriptionInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<OrderCreateWithoutPrescriptionInput, OrderUncheckedCreateWithoutPrescriptionInput> | OrderCreateWithoutPrescriptionInput[] | OrderUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPrescriptionInput | OrderCreateOrConnectWithoutPrescriptionInput[]
    createMany?: OrderCreateManyPrescriptionInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CustomerUpdateOneWithoutPrescriptionsNestedInput = {
    create?: XOR<CustomerCreateWithoutPrescriptionsInput, CustomerUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPrescriptionsInput
    upsert?: CustomerUpsertWithoutPrescriptionsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPrescriptionsInput, CustomerUpdateWithoutPrescriptionsInput>, CustomerUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PharmacyUpdateOneWithoutPrescriptionsNestedInput = {
    create?: XOR<PharmacyCreateWithoutPrescriptionsInput, PharmacyUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutPrescriptionsInput
    upsert?: PharmacyUpsertWithoutPrescriptionsInput
    disconnect?: PharmacyWhereInput | boolean
    delete?: PharmacyWhereInput | boolean
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutPrescriptionsInput, PharmacyUpdateWithoutPrescriptionsInput>, PharmacyUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type OrderUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<OrderCreateWithoutPrescriptionInput, OrderUncheckedCreateWithoutPrescriptionInput> | OrderCreateWithoutPrescriptionInput[] | OrderUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPrescriptionInput | OrderCreateOrConnectWithoutPrescriptionInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPrescriptionInput | OrderUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: OrderCreateManyPrescriptionInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPrescriptionInput | OrderUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPrescriptionInput | OrderUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<OrderCreateWithoutPrescriptionInput, OrderUncheckedCreateWithoutPrescriptionInput> | OrderCreateWithoutPrescriptionInput[] | OrderUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPrescriptionInput | OrderCreateOrConnectWithoutPrescriptionInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPrescriptionInput | OrderUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: OrderCreateManyPrescriptionInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPrescriptionInput | OrderUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPrescriptionInput | OrderUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutLabReportsInput = {
    create?: XOR<CustomerCreateWithoutLabReportsInput, CustomerUncheckedCreateWithoutLabReportsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLabReportsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutLabReportsNestedInput = {
    create?: XOR<CustomerCreateWithoutLabReportsInput, CustomerUncheckedCreateWithoutLabReportsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLabReportsInput
    upsert?: CustomerUpsertWithoutLabReportsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLabReportsInput, CustomerUpdateWithoutLabReportsInput>, CustomerUncheckedUpdateWithoutLabReportsInput>
  }

  export type CustomerCreateNestedOneWithoutShortageRequestsInput = {
    create?: XOR<CustomerCreateWithoutShortageRequestsInput, CustomerUncheckedCreateWithoutShortageRequestsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShortageRequestsInput
    connect?: CustomerWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutShortageRequestInput = {
    create?: XOR<OrderCreateWithoutShortageRequestInput, OrderUncheckedCreateWithoutShortageRequestInput> | OrderCreateWithoutShortageRequestInput[] | OrderUncheckedCreateWithoutShortageRequestInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShortageRequestInput | OrderCreateOrConnectWithoutShortageRequestInput[]
    createMany?: OrderCreateManyShortageRequestInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutShortageRequestInput = {
    create?: XOR<OrderCreateWithoutShortageRequestInput, OrderUncheckedCreateWithoutShortageRequestInput> | OrderCreateWithoutShortageRequestInput[] | OrderUncheckedCreateWithoutShortageRequestInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShortageRequestInput | OrderCreateOrConnectWithoutShortageRequestInput[]
    createMany?: OrderCreateManyShortageRequestInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneWithoutShortageRequestsNestedInput = {
    create?: XOR<CustomerCreateWithoutShortageRequestsInput, CustomerUncheckedCreateWithoutShortageRequestsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutShortageRequestsInput
    upsert?: CustomerUpsertWithoutShortageRequestsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutShortageRequestsInput, CustomerUpdateWithoutShortageRequestsInput>, CustomerUncheckedUpdateWithoutShortageRequestsInput>
  }

  export type OrderUpdateManyWithoutShortageRequestNestedInput = {
    create?: XOR<OrderCreateWithoutShortageRequestInput, OrderUncheckedCreateWithoutShortageRequestInput> | OrderCreateWithoutShortageRequestInput[] | OrderUncheckedCreateWithoutShortageRequestInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShortageRequestInput | OrderCreateOrConnectWithoutShortageRequestInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShortageRequestInput | OrderUpsertWithWhereUniqueWithoutShortageRequestInput[]
    createMany?: OrderCreateManyShortageRequestInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShortageRequestInput | OrderUpdateWithWhereUniqueWithoutShortageRequestInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShortageRequestInput | OrderUpdateManyWithWhereWithoutShortageRequestInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutShortageRequestNestedInput = {
    create?: XOR<OrderCreateWithoutShortageRequestInput, OrderUncheckedCreateWithoutShortageRequestInput> | OrderCreateWithoutShortageRequestInput[] | OrderUncheckedCreateWithoutShortageRequestInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShortageRequestInput | OrderCreateOrConnectWithoutShortageRequestInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShortageRequestInput | OrderUpsertWithWhereUniqueWithoutShortageRequestInput[]
    createMany?: OrderCreateManyShortageRequestInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShortageRequestInput | OrderUpdateWithWhereUniqueWithoutShortageRequestInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShortageRequestInput | OrderUpdateManyWithWhereWithoutShortageRequestInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PharmacyCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PharmacyCreateWithoutOrdersInput, PharmacyUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutOrdersInput
    connect?: PharmacyWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type CourierCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CourierCreateWithoutOrdersInput, CourierUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CourierCreateOrConnectWithoutOrdersInput
    connect?: CourierWhereUniqueInput
  }

  export type PrescriptionCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PrescriptionCreateWithoutOrdersInput, PrescriptionUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutOrdersInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type ShortageRequestCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ShortageRequestCreateWithoutOrdersInput, ShortageRequestUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShortageRequestCreateOrConnectWithoutOrdersInput
    connect?: ShortageRequestWhereUniqueInput
  }

  export type PharmacyUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<PharmacyCreateWithoutOrdersInput, PharmacyUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutOrdersInput
    upsert?: PharmacyUpsertWithoutOrdersInput
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutOrdersInput, PharmacyUpdateWithoutOrdersInput>, PharmacyUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CourierUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<CourierCreateWithoutOrdersInput, CourierUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CourierCreateOrConnectWithoutOrdersInput
    upsert?: CourierUpsertWithoutOrdersInput
    disconnect?: CourierWhereInput | boolean
    delete?: CourierWhereInput | boolean
    connect?: CourierWhereUniqueInput
    update?: XOR<XOR<CourierUpdateToOneWithWhereWithoutOrdersInput, CourierUpdateWithoutOrdersInput>, CourierUncheckedUpdateWithoutOrdersInput>
  }

  export type PrescriptionUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<PrescriptionCreateWithoutOrdersInput, PrescriptionUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutOrdersInput
    upsert?: PrescriptionUpsertWithoutOrdersInput
    disconnect?: PrescriptionWhereInput | boolean
    delete?: PrescriptionWhereInput | boolean
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutOrdersInput, PrescriptionUpdateWithoutOrdersInput>, PrescriptionUncheckedUpdateWithoutOrdersInput>
  }

  export type ShortageRequestUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ShortageRequestCreateWithoutOrdersInput, ShortageRequestUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShortageRequestCreateOrConnectWithoutOrdersInput
    upsert?: ShortageRequestUpsertWithoutOrdersInput
    disconnect?: ShortageRequestWhereInput | boolean
    delete?: ShortageRequestWhereInput | boolean
    connect?: ShortageRequestWhereUniqueInput
    update?: XOR<XOR<ShortageRequestUpdateToOneWithWhereWithoutOrdersInput, ShortageRequestUpdateWithoutOrdersInput>, ShortageRequestUncheckedUpdateWithoutOrdersInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PharmacyStaffCreateWithoutPharmacyInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PharmacyStaffUncheckedCreateWithoutPharmacyInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PharmacyStaffCreateOrConnectWithoutPharmacyInput = {
    where: PharmacyStaffWhereUniqueInput
    create: XOR<PharmacyStaffCreateWithoutPharmacyInput, PharmacyStaffUncheckedCreateWithoutPharmacyInput>
  }

  export type PharmacyStaffCreateManyPharmacyInputEnvelope = {
    data: PharmacyStaffCreateManyPharmacyInput | PharmacyStaffCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type PharmacyInventoryCreateWithoutPharmacyInput = {
    id?: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
    medicine: MedicineCreateNestedOneWithoutInventoryInput
  }

  export type PharmacyInventoryUncheckedCreateWithoutPharmacyInput = {
    id?: string
    medicineId: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
  }

  export type PharmacyInventoryCreateOrConnectWithoutPharmacyInput = {
    where: PharmacyInventoryWhereUniqueInput
    create: XOR<PharmacyInventoryCreateWithoutPharmacyInput, PharmacyInventoryUncheckedCreateWithoutPharmacyInput>
  }

  export type PharmacyInventoryCreateManyPharmacyInputEnvelope = {
    data: PharmacyInventoryCreateManyPharmacyInput | PharmacyInventoryCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type CourierCreateWithoutPharmacyInput = {
    id?: string
    name: string
    phone: string
    vehicleType?: string
    isAvailable?: boolean
    currentLat?: number | null
    currentLng?: number | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateWithoutPharmacyInput = {
    id?: string
    name: string
    phone: string
    vehicleType?: string
    isAvailable?: boolean
    currentLat?: number | null
    currentLng?: number | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierCreateOrConnectWithoutPharmacyInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutPharmacyInput, CourierUncheckedCreateWithoutPharmacyInput>
  }

  export type CourierCreateManyPharmacyInputEnvelope = {
    data: CourierCreateManyPharmacyInput | CourierCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutPharmacyInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    courier?: CourierCreateNestedOneWithoutOrdersInput
    prescription?: PrescriptionCreateNestedOneWithoutOrdersInput
    shortageRequest?: ShortageRequestCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPharmacyInput = {
    id?: string
    orderNumber: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    prescriptionId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutPharmacyInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPharmacyInput, OrderUncheckedCreateWithoutPharmacyInput>
  }

  export type OrderCreateManyPharmacyInputEnvelope = {
    data: OrderCreateManyPharmacyInput | OrderCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutPharmacyInput = {
    id?: string
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutPrescriptionsInput
    orders?: OrderCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPharmacyInput = {
    id?: string
    customerId?: string | null
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutPharmacyInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput>
  }

  export type PrescriptionCreateManyPharmacyInputEnvelope = {
    data: PrescriptionCreateManyPharmacyInput | PrescriptionCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type PharmacyStaffUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: PharmacyStaffWhereUniqueInput
    update: XOR<PharmacyStaffUpdateWithoutPharmacyInput, PharmacyStaffUncheckedUpdateWithoutPharmacyInput>
    create: XOR<PharmacyStaffCreateWithoutPharmacyInput, PharmacyStaffUncheckedCreateWithoutPharmacyInput>
  }

  export type PharmacyStaffUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: PharmacyStaffWhereUniqueInput
    data: XOR<PharmacyStaffUpdateWithoutPharmacyInput, PharmacyStaffUncheckedUpdateWithoutPharmacyInput>
  }

  export type PharmacyStaffUpdateManyWithWhereWithoutPharmacyInput = {
    where: PharmacyStaffScalarWhereInput
    data: XOR<PharmacyStaffUpdateManyMutationInput, PharmacyStaffUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type PharmacyStaffScalarWhereInput = {
    AND?: PharmacyStaffScalarWhereInput | PharmacyStaffScalarWhereInput[]
    OR?: PharmacyStaffScalarWhereInput[]
    NOT?: PharmacyStaffScalarWhereInput | PharmacyStaffScalarWhereInput[]
    id?: StringFilter<"PharmacyStaff"> | string
    pharmacyId?: StringFilter<"PharmacyStaff"> | string
    name?: StringFilter<"PharmacyStaff"> | string
    username?: StringFilter<"PharmacyStaff"> | string
    password?: StringFilter<"PharmacyStaff"> | string
    role?: StringFilter<"PharmacyStaff"> | string
    phone?: StringNullableFilter<"PharmacyStaff"> | string | null
    isActive?: BoolFilter<"PharmacyStaff"> | boolean
    createdAt?: DateTimeFilter<"PharmacyStaff"> | Date | string
  }

  export type PharmacyInventoryUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: PharmacyInventoryWhereUniqueInput
    update: XOR<PharmacyInventoryUpdateWithoutPharmacyInput, PharmacyInventoryUncheckedUpdateWithoutPharmacyInput>
    create: XOR<PharmacyInventoryCreateWithoutPharmacyInput, PharmacyInventoryUncheckedCreateWithoutPharmacyInput>
  }

  export type PharmacyInventoryUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: PharmacyInventoryWhereUniqueInput
    data: XOR<PharmacyInventoryUpdateWithoutPharmacyInput, PharmacyInventoryUncheckedUpdateWithoutPharmacyInput>
  }

  export type PharmacyInventoryUpdateManyWithWhereWithoutPharmacyInput = {
    where: PharmacyInventoryScalarWhereInput
    data: XOR<PharmacyInventoryUpdateManyMutationInput, PharmacyInventoryUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type PharmacyInventoryScalarWhereInput = {
    AND?: PharmacyInventoryScalarWhereInput | PharmacyInventoryScalarWhereInput[]
    OR?: PharmacyInventoryScalarWhereInput[]
    NOT?: PharmacyInventoryScalarWhereInput | PharmacyInventoryScalarWhereInput[]
    id?: StringFilter<"PharmacyInventory"> | string
    pharmacyId?: StringFilter<"PharmacyInventory"> | string
    medicineId?: StringFilter<"PharmacyInventory"> | string
    stockQuantity?: IntFilter<"PharmacyInventory"> | number
    price?: FloatFilter<"PharmacyInventory"> | number
    isAvailable?: BoolFilter<"PharmacyInventory"> | boolean
    expiryDate?: StringNullableFilter<"PharmacyInventory"> | string | null
    updatedAt?: DateTimeFilter<"PharmacyInventory"> | Date | string
  }

  export type CourierUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: CourierWhereUniqueInput
    update: XOR<CourierUpdateWithoutPharmacyInput, CourierUncheckedUpdateWithoutPharmacyInput>
    create: XOR<CourierCreateWithoutPharmacyInput, CourierUncheckedCreateWithoutPharmacyInput>
  }

  export type CourierUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: CourierWhereUniqueInput
    data: XOR<CourierUpdateWithoutPharmacyInput, CourierUncheckedUpdateWithoutPharmacyInput>
  }

  export type CourierUpdateManyWithWhereWithoutPharmacyInput = {
    where: CourierScalarWhereInput
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type CourierScalarWhereInput = {
    AND?: CourierScalarWhereInput | CourierScalarWhereInput[]
    OR?: CourierScalarWhereInput[]
    NOT?: CourierScalarWhereInput | CourierScalarWhereInput[]
    id?: StringFilter<"Courier"> | string
    pharmacyId?: StringFilter<"Courier"> | string
    name?: StringFilter<"Courier"> | string
    phone?: StringFilter<"Courier"> | string
    vehicleType?: StringFilter<"Courier"> | string
    isAvailable?: BoolFilter<"Courier"> | boolean
    currentLat?: FloatNullableFilter<"Courier"> | number | null
    currentLng?: FloatNullableFilter<"Courier"> | number | null
    totalOrders?: IntFilter<"Courier"> | number
    createdAt?: DateTimeFilter<"Courier"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPharmacyInput, OrderUncheckedUpdateWithoutPharmacyInput>
    create: XOR<OrderCreateWithoutPharmacyInput, OrderUncheckedCreateWithoutPharmacyInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPharmacyInput, OrderUncheckedUpdateWithoutPharmacyInput>
  }

  export type OrderUpdateManyWithWhereWithoutPharmacyInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    pharmacyId?: StringFilter<"Order"> | string
    customerId?: StringNullableFilter<"Order"> | string | null
    customerName?: StringFilter<"Order"> | string
    customerPhone?: StringFilter<"Order"> | string
    customerAddress?: StringFilter<"Order"> | string
    orderType?: StringFilter<"Order"> | string
    items?: StringFilter<"Order"> | string
    subtotal?: FloatFilter<"Order"> | number
    deliveryFee?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    paymentMethod?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    courierId?: StringNullableFilter<"Order"> | string | null
    prescriptionId?: StringNullableFilter<"Order"> | string | null
    shortageRequestId?: StringNullableFilter<"Order"> | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPharmacyInput, PrescriptionUncheckedUpdateWithoutPharmacyInput>
    create: XOR<PrescriptionCreateWithoutPharmacyInput, PrescriptionUncheckedCreateWithoutPharmacyInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPharmacyInput, PrescriptionUncheckedUpdateWithoutPharmacyInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPharmacyInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: StringFilter<"Prescription"> | string
    customerId?: StringNullableFilter<"Prescription"> | string | null
    pharmacyId?: StringNullableFilter<"Prescription"> | string | null
    imageUrl?: StringFilter<"Prescription"> | string
    rawOcrText?: StringNullableFilter<"Prescription"> | string | null
    parsedMedicines?: StringFilter<"Prescription"> | string
    doctorSpecialty?: StringNullableFilter<"Prescription"> | string | null
    aiConfidence?: FloatFilter<"Prescription"> | number
    status?: StringFilter<"Prescription"> | string
    notes?: StringNullableFilter<"Prescription"> | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
  }

  export type PharmacyCreateWithoutStaffInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: PharmacyInventoryCreateNestedManyWithoutPharmacyInput
    couriers?: CourierCreateNestedManyWithoutPharmacyInput
    orders?: OrderCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutStaffInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: PharmacyInventoryUncheckedCreateNestedManyWithoutPharmacyInput
    couriers?: CourierUncheckedCreateNestedManyWithoutPharmacyInput
    orders?: OrderUncheckedCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutStaffInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutStaffInput, PharmacyUncheckedCreateWithoutStaffInput>
  }

  export type PharmacyUpsertWithoutStaffInput = {
    update: XOR<PharmacyUpdateWithoutStaffInput, PharmacyUncheckedUpdateWithoutStaffInput>
    create: XOR<PharmacyCreateWithoutStaffInput, PharmacyUncheckedCreateWithoutStaffInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutStaffInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutStaffInput, PharmacyUncheckedUpdateWithoutStaffInput>
  }

  export type PharmacyUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: PharmacyInventoryUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: PharmacyInventoryUncheckedUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyCreateWithoutCouriersInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffCreateNestedManyWithoutPharmacyInput
    inventory?: PharmacyInventoryCreateNestedManyWithoutPharmacyInput
    orders?: OrderCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutCouriersInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffUncheckedCreateNestedManyWithoutPharmacyInput
    inventory?: PharmacyInventoryUncheckedCreateNestedManyWithoutPharmacyInput
    orders?: OrderUncheckedCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutCouriersInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutCouriersInput, PharmacyUncheckedCreateWithoutCouriersInput>
  }

  export type OrderCreateWithoutCourierInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    prescription?: PrescriptionCreateNestedOneWithoutOrdersInput
    shortageRequest?: ShortageRequestCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutCourierInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    prescriptionId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutCourierInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCourierInput, OrderUncheckedCreateWithoutCourierInput>
  }

  export type OrderCreateManyCourierInputEnvelope = {
    data: OrderCreateManyCourierInput | OrderCreateManyCourierInput[]
    skipDuplicates?: boolean
  }

  export type PharmacyUpsertWithoutCouriersInput = {
    update: XOR<PharmacyUpdateWithoutCouriersInput, PharmacyUncheckedUpdateWithoutCouriersInput>
    create: XOR<PharmacyCreateWithoutCouriersInput, PharmacyUncheckedCreateWithoutCouriersInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutCouriersInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutCouriersInput, PharmacyUncheckedUpdateWithoutCouriersInput>
  }

  export type PharmacyUpdateWithoutCouriersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUpdateManyWithoutPharmacyNestedInput
    inventory?: PharmacyInventoryUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutCouriersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUncheckedUpdateManyWithoutPharmacyNestedInput
    inventory?: PharmacyInventoryUncheckedUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutCourierInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCourierInput, OrderUncheckedUpdateWithoutCourierInput>
    create: XOR<OrderCreateWithoutCourierInput, OrderUncheckedCreateWithoutCourierInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCourierInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCourierInput, OrderUncheckedUpdateWithoutCourierInput>
  }

  export type OrderUpdateManyWithWhereWithoutCourierInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCourierInput>
  }

  export type OrderCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutOrdersInput
    courier?: CourierCreateNestedOneWithoutOrdersInput
    prescription?: PrescriptionCreateNestedOneWithoutOrdersInput
    shortageRequest?: ShortageRequestCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    prescriptionId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutCustomerInput = {
    id?: string
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutPrescriptionsInput
    orders?: OrderCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutCustomerInput = {
    id?: string
    pharmacyId?: string | null
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutCustomerInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutCustomerInput, PrescriptionUncheckedCreateWithoutCustomerInput>
  }

  export type PrescriptionCreateManyCustomerInputEnvelope = {
    data: PrescriptionCreateManyCustomerInput | PrescriptionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type LabReportCreateWithoutCustomerInput = {
    id?: string
    imageUrl: string
    testType?: string
    rawOcrText?: string | null
    simplifiedAnalysisAr: string
    abnormalValues: string
    doctorAdviceQuestions?: string | null
    suggestedVitamins?: string | null
    createdAt?: Date | string
  }

  export type LabReportUncheckedCreateWithoutCustomerInput = {
    id?: string
    imageUrl: string
    testType?: string
    rawOcrText?: string | null
    simplifiedAnalysisAr: string
    abnormalValues: string
    doctorAdviceQuestions?: string | null
    suggestedVitamins?: string | null
    createdAt?: Date | string
  }

  export type LabReportCreateOrConnectWithoutCustomerInput = {
    where: LabReportWhereUniqueInput
    create: XOR<LabReportCreateWithoutCustomerInput, LabReportUncheckedCreateWithoutCustomerInput>
  }

  export type LabReportCreateManyCustomerInputEnvelope = {
    data: LabReportCreateManyCustomerInput | LabReportCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ShortageRequestCreateWithoutCustomerInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    customerCity: string
    governorate: string
    quantityNeeded?: number
    urgency?: string
    status?: string
    foundPharmacyId?: string | null
    reservationExpiry?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutShortageRequestInput
  }

  export type ShortageRequestUncheckedCreateWithoutCustomerInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    customerCity: string
    governorate: string
    quantityNeeded?: number
    urgency?: string
    status?: string
    foundPharmacyId?: string | null
    reservationExpiry?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutShortageRequestInput
  }

  export type ShortageRequestCreateOrConnectWithoutCustomerInput = {
    where: ShortageRequestWhereUniqueInput
    create: XOR<ShortageRequestCreateWithoutCustomerInput, ShortageRequestUncheckedCreateWithoutCustomerInput>
  }

  export type ShortageRequestCreateManyCustomerInputEnvelope = {
    data: ShortageRequestCreateManyCustomerInput | ShortageRequestCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutCustomerInput, PrescriptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<PrescriptionCreateWithoutCustomerInput, PrescriptionUncheckedCreateWithoutCustomerInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutCustomerInput, PrescriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutCustomerInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type LabReportUpsertWithWhereUniqueWithoutCustomerInput = {
    where: LabReportWhereUniqueInput
    update: XOR<LabReportUpdateWithoutCustomerInput, LabReportUncheckedUpdateWithoutCustomerInput>
    create: XOR<LabReportCreateWithoutCustomerInput, LabReportUncheckedCreateWithoutCustomerInput>
  }

  export type LabReportUpdateWithWhereUniqueWithoutCustomerInput = {
    where: LabReportWhereUniqueInput
    data: XOR<LabReportUpdateWithoutCustomerInput, LabReportUncheckedUpdateWithoutCustomerInput>
  }

  export type LabReportUpdateManyWithWhereWithoutCustomerInput = {
    where: LabReportScalarWhereInput
    data: XOR<LabReportUpdateManyMutationInput, LabReportUncheckedUpdateManyWithoutCustomerInput>
  }

  export type LabReportScalarWhereInput = {
    AND?: LabReportScalarWhereInput | LabReportScalarWhereInput[]
    OR?: LabReportScalarWhereInput[]
    NOT?: LabReportScalarWhereInput | LabReportScalarWhereInput[]
    id?: StringFilter<"LabReport"> | string
    customerId?: StringNullableFilter<"LabReport"> | string | null
    imageUrl?: StringFilter<"LabReport"> | string
    testType?: StringFilter<"LabReport"> | string
    rawOcrText?: StringNullableFilter<"LabReport"> | string | null
    simplifiedAnalysisAr?: StringFilter<"LabReport"> | string
    abnormalValues?: StringFilter<"LabReport"> | string
    doctorAdviceQuestions?: StringNullableFilter<"LabReport"> | string | null
    suggestedVitamins?: StringNullableFilter<"LabReport"> | string | null
    createdAt?: DateTimeFilter<"LabReport"> | Date | string
  }

  export type ShortageRequestUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ShortageRequestWhereUniqueInput
    update: XOR<ShortageRequestUpdateWithoutCustomerInput, ShortageRequestUncheckedUpdateWithoutCustomerInput>
    create: XOR<ShortageRequestCreateWithoutCustomerInput, ShortageRequestUncheckedCreateWithoutCustomerInput>
  }

  export type ShortageRequestUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ShortageRequestWhereUniqueInput
    data: XOR<ShortageRequestUpdateWithoutCustomerInput, ShortageRequestUncheckedUpdateWithoutCustomerInput>
  }

  export type ShortageRequestUpdateManyWithWhereWithoutCustomerInput = {
    where: ShortageRequestScalarWhereInput
    data: XOR<ShortageRequestUpdateManyMutationInput, ShortageRequestUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ShortageRequestScalarWhereInput = {
    AND?: ShortageRequestScalarWhereInput | ShortageRequestScalarWhereInput[]
    OR?: ShortageRequestScalarWhereInput[]
    NOT?: ShortageRequestScalarWhereInput | ShortageRequestScalarWhereInput[]
    id?: StringFilter<"ShortageRequest"> | string
    customerId?: StringNullableFilter<"ShortageRequest"> | string | null
    medicineName?: StringFilter<"ShortageRequest"> | string
    genericName?: StringNullableFilter<"ShortageRequest"> | string | null
    customerCity?: StringFilter<"ShortageRequest"> | string
    governorate?: StringFilter<"ShortageRequest"> | string
    quantityNeeded?: IntFilter<"ShortageRequest"> | number
    urgency?: StringFilter<"ShortageRequest"> | string
    status?: StringFilter<"ShortageRequest"> | string
    foundPharmacyId?: StringNullableFilter<"ShortageRequest"> | string | null
    reservationExpiry?: DateTimeNullableFilter<"ShortageRequest"> | Date | string | null
    notes?: StringNullableFilter<"ShortageRequest"> | string | null
    createdAt?: DateTimeFilter<"ShortageRequest"> | Date | string
  }

  export type PharmacyInventoryCreateWithoutMedicineInput = {
    id?: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutInventoryInput
  }

  export type PharmacyInventoryUncheckedCreateWithoutMedicineInput = {
    id?: string
    pharmacyId: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
  }

  export type PharmacyInventoryCreateOrConnectWithoutMedicineInput = {
    where: PharmacyInventoryWhereUniqueInput
    create: XOR<PharmacyInventoryCreateWithoutMedicineInput, PharmacyInventoryUncheckedCreateWithoutMedicineInput>
  }

  export type PharmacyInventoryCreateManyMedicineInputEnvelope = {
    data: PharmacyInventoryCreateManyMedicineInput | PharmacyInventoryCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type PharmacyInventoryUpsertWithWhereUniqueWithoutMedicineInput = {
    where: PharmacyInventoryWhereUniqueInput
    update: XOR<PharmacyInventoryUpdateWithoutMedicineInput, PharmacyInventoryUncheckedUpdateWithoutMedicineInput>
    create: XOR<PharmacyInventoryCreateWithoutMedicineInput, PharmacyInventoryUncheckedCreateWithoutMedicineInput>
  }

  export type PharmacyInventoryUpdateWithWhereUniqueWithoutMedicineInput = {
    where: PharmacyInventoryWhereUniqueInput
    data: XOR<PharmacyInventoryUpdateWithoutMedicineInput, PharmacyInventoryUncheckedUpdateWithoutMedicineInput>
  }

  export type PharmacyInventoryUpdateManyWithWhereWithoutMedicineInput = {
    where: PharmacyInventoryScalarWhereInput
    data: XOR<PharmacyInventoryUpdateManyMutationInput, PharmacyInventoryUncheckedUpdateManyWithoutMedicineInput>
  }

  export type PharmacyCreateWithoutInventoryInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffCreateNestedManyWithoutPharmacyInput
    couriers?: CourierCreateNestedManyWithoutPharmacyInput
    orders?: OrderCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutInventoryInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffUncheckedCreateNestedManyWithoutPharmacyInput
    couriers?: CourierUncheckedCreateNestedManyWithoutPharmacyInput
    orders?: OrderUncheckedCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutInventoryInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutInventoryInput, PharmacyUncheckedCreateWithoutInventoryInput>
  }

  export type MedicineCreateWithoutInventoryInput = {
    id?: string
    tradeNameAr: string
    tradeNameEn: string
    genericName: string
    strength?: string | null
    dosageForm: string
    category: string
    officialPrice: number
    manufacturer?: string | null
    barcode?: string | null
    image?: string | null
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type MedicineUncheckedCreateWithoutInventoryInput = {
    id?: string
    tradeNameAr: string
    tradeNameEn: string
    genericName: string
    strength?: string | null
    dosageForm: string
    category: string
    officialPrice: number
    manufacturer?: string | null
    barcode?: string | null
    image?: string | null
    requiresPrescription?: boolean
    isShortage?: boolean
    alternatives?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type MedicineCreateOrConnectWithoutInventoryInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutInventoryInput, MedicineUncheckedCreateWithoutInventoryInput>
  }

  export type PharmacyUpsertWithoutInventoryInput = {
    update: XOR<PharmacyUpdateWithoutInventoryInput, PharmacyUncheckedUpdateWithoutInventoryInput>
    create: XOR<PharmacyCreateWithoutInventoryInput, PharmacyUncheckedCreateWithoutInventoryInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutInventoryInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutInventoryInput, PharmacyUncheckedUpdateWithoutInventoryInput>
  }

  export type PharmacyUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUncheckedUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type MedicineUpsertWithoutInventoryInput = {
    update: XOR<MedicineUpdateWithoutInventoryInput, MedicineUncheckedUpdateWithoutInventoryInput>
    create: XOR<MedicineCreateWithoutInventoryInput, MedicineUncheckedCreateWithoutInventoryInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutInventoryInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutInventoryInput, MedicineUncheckedUpdateWithoutInventoryInput>
  }

  export type MedicineUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNameAr?: StringFieldUpdateOperationsInput | string
    tradeNameEn?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    dosageForm?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    officialPrice?: FloatFieldUpdateOperationsInput | number
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    isShortage?: BoolFieldUpdateOperationsInput | boolean
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNameAr?: StringFieldUpdateOperationsInput | string
    tradeNameEn?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    dosageForm?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    officialPrice?: FloatFieldUpdateOperationsInput | number
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    isShortage?: BoolFieldUpdateOperationsInput | boolean
    alternatives?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutPrescriptionsInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    labReports?: LabReportCreateNestedManyWithoutCustomerInput
    shortageRequests?: ShortageRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    labReports?: LabReportUncheckedCreateNestedManyWithoutCustomerInput
    shortageRequests?: ShortageRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPrescriptionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPrescriptionsInput, CustomerUncheckedCreateWithoutPrescriptionsInput>
  }

  export type PharmacyCreateWithoutPrescriptionsInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffCreateNestedManyWithoutPharmacyInput
    inventory?: PharmacyInventoryCreateNestedManyWithoutPharmacyInput
    couriers?: CourierCreateNestedManyWithoutPharmacyInput
    orders?: OrderCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffUncheckedCreateNestedManyWithoutPharmacyInput
    inventory?: PharmacyInventoryUncheckedCreateNestedManyWithoutPharmacyInput
    couriers?: CourierUncheckedCreateNestedManyWithoutPharmacyInput
    orders?: OrderUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutPrescriptionsInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutPrescriptionsInput, PharmacyUncheckedCreateWithoutPrescriptionsInput>
  }

  export type OrderCreateWithoutPrescriptionInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    courier?: CourierCreateNestedOneWithoutOrdersInput
    shortageRequest?: ShortageRequestCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPrescriptionInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutPrescriptionInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPrescriptionInput, OrderUncheckedCreateWithoutPrescriptionInput>
  }

  export type OrderCreateManyPrescriptionInputEnvelope = {
    data: OrderCreateManyPrescriptionInput | OrderCreateManyPrescriptionInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutPrescriptionsInput = {
    update: XOR<CustomerUpdateWithoutPrescriptionsInput, CustomerUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<CustomerCreateWithoutPrescriptionsInput, CustomerUncheckedCreateWithoutPrescriptionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPrescriptionsInput, CustomerUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type CustomerUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    labReports?: LabReportUpdateManyWithoutCustomerNestedInput
    shortageRequests?: ShortageRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    labReports?: LabReportUncheckedUpdateManyWithoutCustomerNestedInput
    shortageRequests?: ShortageRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PharmacyUpsertWithoutPrescriptionsInput = {
    update: XOR<PharmacyUpdateWithoutPrescriptionsInput, PharmacyUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<PharmacyCreateWithoutPrescriptionsInput, PharmacyUncheckedCreateWithoutPrescriptionsInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutPrescriptionsInput, PharmacyUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PharmacyUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUpdateManyWithoutPharmacyNestedInput
    inventory?: PharmacyInventoryUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUncheckedUpdateManyWithoutPharmacyNestedInput
    inventory?: PharmacyInventoryUncheckedUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutPharmacyNestedInput
    orders?: OrderUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutPrescriptionInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPrescriptionInput, OrderUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<OrderCreateWithoutPrescriptionInput, OrderUncheckedCreateWithoutPrescriptionInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPrescriptionInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPrescriptionInput, OrderUncheckedUpdateWithoutPrescriptionInput>
  }

  export type OrderUpdateManyWithWhereWithoutPrescriptionInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPrescriptionInput>
  }

  export type CustomerCreateWithoutLabReportsInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    prescriptions?: PrescriptionCreateNestedManyWithoutCustomerInput
    shortageRequests?: ShortageRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutLabReportsInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutCustomerInput
    shortageRequests?: ShortageRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutLabReportsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLabReportsInput, CustomerUncheckedCreateWithoutLabReportsInput>
  }

  export type CustomerUpsertWithoutLabReportsInput = {
    update: XOR<CustomerUpdateWithoutLabReportsInput, CustomerUncheckedUpdateWithoutLabReportsInput>
    create: XOR<CustomerCreateWithoutLabReportsInput, CustomerUncheckedCreateWithoutLabReportsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutLabReportsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutLabReportsInput, CustomerUncheckedUpdateWithoutLabReportsInput>
  }

  export type CustomerUpdateWithoutLabReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutCustomerNestedInput
    shortageRequests?: ShortageRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutLabReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutCustomerNestedInput
    shortageRequests?: ShortageRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutShortageRequestsInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    prescriptions?: PrescriptionCreateNestedManyWithoutCustomerInput
    labReports?: LabReportCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutShortageRequestsInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutCustomerInput
    labReports?: LabReportUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutShortageRequestsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutShortageRequestsInput, CustomerUncheckedCreateWithoutShortageRequestsInput>
  }

  export type OrderCreateWithoutShortageRequestInput = {
    id?: string
    orderNumber: string
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    courier?: CourierCreateNestedOneWithoutOrdersInput
    prescription?: PrescriptionCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutShortageRequestInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    prescriptionId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutShortageRequestInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShortageRequestInput, OrderUncheckedCreateWithoutShortageRequestInput>
  }

  export type OrderCreateManyShortageRequestInputEnvelope = {
    data: OrderCreateManyShortageRequestInput | OrderCreateManyShortageRequestInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutShortageRequestsInput = {
    update: XOR<CustomerUpdateWithoutShortageRequestsInput, CustomerUncheckedUpdateWithoutShortageRequestsInput>
    create: XOR<CustomerCreateWithoutShortageRequestsInput, CustomerUncheckedCreateWithoutShortageRequestsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutShortageRequestsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutShortageRequestsInput, CustomerUncheckedUpdateWithoutShortageRequestsInput>
  }

  export type CustomerUpdateWithoutShortageRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutCustomerNestedInput
    labReports?: LabReportUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutShortageRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutCustomerNestedInput
    labReports?: LabReportUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutShortageRequestInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShortageRequestInput, OrderUncheckedUpdateWithoutShortageRequestInput>
    create: XOR<OrderCreateWithoutShortageRequestInput, OrderUncheckedCreateWithoutShortageRequestInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShortageRequestInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShortageRequestInput, OrderUncheckedUpdateWithoutShortageRequestInput>
  }

  export type OrderUpdateManyWithWhereWithoutShortageRequestInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutShortageRequestInput>
  }

  export type PharmacyCreateWithoutOrdersInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffCreateNestedManyWithoutPharmacyInput
    inventory?: PharmacyInventoryCreateNestedManyWithoutPharmacyInput
    couriers?: CourierCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutOrdersInput = {
    id?: string
    slug: string
    nameAr: string
    nameEn: string
    licenseNumber?: string | null
    ownerName: string
    phone: string
    whatsapp: string
    email?: string | null
    address: string
    city: string
    governorate: string
    lat?: number | null
    lng?: number | null
    logoUrl?: string | null
    coverUrl?: string | null
    rating?: number
    isOpen?: boolean
    deliveryAvailable?: boolean
    deliveryFee?: number
    deliveryTimeEstimate?: string
    workingHours?: string
    isVerified?: boolean
    subscriptionPlan?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: PharmacyStaffUncheckedCreateNestedManyWithoutPharmacyInput
    inventory?: PharmacyInventoryUncheckedCreateNestedManyWithoutPharmacyInput
    couriers?: CourierUncheckedCreateNestedManyWithoutPharmacyInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutOrdersInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutOrdersInput, PharmacyUncheckedCreateWithoutOrdersInput>
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    prescriptions?: PrescriptionCreateNestedManyWithoutCustomerInput
    labReports?: LabReportCreateNestedManyWithoutCustomerInput
    shortageRequests?: ShortageRequestCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    phone: string
    city?: string | null
    address?: string | null
    lat?: number | null
    lng?: number | null
    allergies?: string | null
    chronicDiseases?: string | null
    totalOrders?: number
    createdAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutCustomerInput
    labReports?: LabReportUncheckedCreateNestedManyWithoutCustomerInput
    shortageRequests?: ShortageRequestUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type CourierCreateWithoutOrdersInput = {
    id?: string
    name: string
    phone: string
    vehicleType?: string
    isAvailable?: boolean
    currentLat?: number | null
    currentLng?: number | null
    totalOrders?: number
    createdAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutCouriersInput
  }

  export type CourierUncheckedCreateWithoutOrdersInput = {
    id?: string
    pharmacyId: string
    name: string
    phone: string
    vehicleType?: string
    isAvailable?: boolean
    currentLat?: number | null
    currentLng?: number | null
    totalOrders?: number
    createdAt?: Date | string
  }

  export type CourierCreateOrConnectWithoutOrdersInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutOrdersInput, CourierUncheckedCreateWithoutOrdersInput>
  }

  export type PrescriptionCreateWithoutOrdersInput = {
    id?: string
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutPrescriptionsInput
    pharmacy?: PharmacyCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutOrdersInput = {
    id?: string
    customerId?: string | null
    pharmacyId?: string | null
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutOrdersInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutOrdersInput, PrescriptionUncheckedCreateWithoutOrdersInput>
  }

  export type ShortageRequestCreateWithoutOrdersInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    customerCity: string
    governorate: string
    quantityNeeded?: number
    urgency?: string
    status?: string
    foundPharmacyId?: string | null
    reservationExpiry?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutShortageRequestsInput
  }

  export type ShortageRequestUncheckedCreateWithoutOrdersInput = {
    id?: string
    customerId?: string | null
    medicineName: string
    genericName?: string | null
    customerCity: string
    governorate: string
    quantityNeeded?: number
    urgency?: string
    status?: string
    foundPharmacyId?: string | null
    reservationExpiry?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ShortageRequestCreateOrConnectWithoutOrdersInput = {
    where: ShortageRequestWhereUniqueInput
    create: XOR<ShortageRequestCreateWithoutOrdersInput, ShortageRequestUncheckedCreateWithoutOrdersInput>
  }

  export type PharmacyUpsertWithoutOrdersInput = {
    update: XOR<PharmacyUpdateWithoutOrdersInput, PharmacyUncheckedUpdateWithoutOrdersInput>
    create: XOR<PharmacyCreateWithoutOrdersInput, PharmacyUncheckedCreateWithoutOrdersInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutOrdersInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutOrdersInput, PharmacyUncheckedUpdateWithoutOrdersInput>
  }

  export type PharmacyUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUpdateManyWithoutPharmacyNestedInput
    inventory?: PharmacyInventoryUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    nameAr?: StringFieldUpdateOperationsInput | string
    nameEn?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ownerName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: FloatFieldUpdateOperationsInput | number
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    deliveryAvailable?: BoolFieldUpdateOperationsInput | boolean
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    deliveryTimeEstimate?: StringFieldUpdateOperationsInput | string
    workingHours?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptionPlan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: PharmacyStaffUncheckedUpdateManyWithoutPharmacyNestedInput
    inventory?: PharmacyInventoryUncheckedUpdateManyWithoutPharmacyNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutPharmacyNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUpdateManyWithoutCustomerNestedInput
    labReports?: LabReportUpdateManyWithoutCustomerNestedInput
    shortageRequests?: ShortageRequestUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    chronicDiseases?: NullableStringFieldUpdateOperationsInput | string | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutCustomerNestedInput
    labReports?: LabReportUncheckedUpdateManyWithoutCustomerNestedInput
    shortageRequests?: ShortageRequestUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CourierUpsertWithoutOrdersInput = {
    update: XOR<CourierUpdateWithoutOrdersInput, CourierUncheckedUpdateWithoutOrdersInput>
    create: XOR<CourierCreateWithoutOrdersInput, CourierUncheckedCreateWithoutOrdersInput>
    where?: CourierWhereInput
  }

  export type CourierUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CourierWhereInput
    data: XOR<CourierUpdateWithoutOrdersInput, CourierUncheckedUpdateWithoutOrdersInput>
  }

  export type CourierUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutCouriersNestedInput
  }

  export type CourierUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpsertWithoutOrdersInput = {
    update: XOR<PrescriptionUpdateWithoutOrdersInput, PrescriptionUncheckedUpdateWithoutOrdersInput>
    create: XOR<PrescriptionCreateWithoutOrdersInput, PrescriptionUncheckedCreateWithoutOrdersInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutOrdersInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutOrdersInput, PrescriptionUncheckedUpdateWithoutOrdersInput>
  }

  export type PrescriptionUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutPrescriptionsNestedInput
    pharmacy?: PharmacyUpdateOneWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortageRequestUpsertWithoutOrdersInput = {
    update: XOR<ShortageRequestUpdateWithoutOrdersInput, ShortageRequestUncheckedUpdateWithoutOrdersInput>
    create: XOR<ShortageRequestCreateWithoutOrdersInput, ShortageRequestUncheckedCreateWithoutOrdersInput>
    where?: ShortageRequestWhereInput
  }

  export type ShortageRequestUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ShortageRequestWhereInput
    data: XOR<ShortageRequestUpdateWithoutOrdersInput, ShortageRequestUncheckedUpdateWithoutOrdersInput>
  }

  export type ShortageRequestUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutShortageRequestsNestedInput
  }

  export type ShortageRequestUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyStaffCreateManyPharmacyInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: string
    phone?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PharmacyInventoryCreateManyPharmacyInput = {
    id?: string
    medicineId: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
  }

  export type CourierCreateManyPharmacyInput = {
    id?: string
    name: string
    phone: string
    vehicleType?: string
    isAvailable?: boolean
    currentLat?: number | null
    currentLng?: number | null
    totalOrders?: number
    createdAt?: Date | string
  }

  export type OrderCreateManyPharmacyInput = {
    id?: string
    orderNumber: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    prescriptionId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyPharmacyInput = {
    id?: string
    customerId?: string | null
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PharmacyStaffUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyStaffUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyStaffUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyInventoryUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type PharmacyInventoryUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyInventoryUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    totalOrders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    courier?: CourierUpdateOneWithoutOrdersNestedInput
    prescription?: PrescriptionUpdateOneWithoutOrdersNestedInput
    shortageRequest?: ShortageRequestUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutPrescriptionsNestedInput
    orders?: OrderUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyCourierInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    prescriptionId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    prescription?: PrescriptionUpdateOneWithoutOrdersNestedInput
    shortageRequest?: ShortageRequestUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyCustomerInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    prescriptionId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyCustomerInput = {
    id?: string
    pharmacyId?: string | null
    imageUrl: string
    rawOcrText?: string | null
    parsedMedicines: string
    doctorSpecialty?: string | null
    aiConfidence?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type LabReportCreateManyCustomerInput = {
    id?: string
    imageUrl: string
    testType?: string
    rawOcrText?: string | null
    simplifiedAnalysisAr: string
    abnormalValues: string
    doctorAdviceQuestions?: string | null
    suggestedVitamins?: string | null
    createdAt?: Date | string
  }

  export type ShortageRequestCreateManyCustomerInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    customerCity: string
    governorate: string
    quantityNeeded?: number
    urgency?: string
    status?: string
    foundPharmacyId?: string | null
    reservationExpiry?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutOrdersNestedInput
    courier?: CourierUpdateOneWithoutOrdersNestedInput
    prescription?: PrescriptionUpdateOneWithoutOrdersNestedInput
    shortageRequest?: ShortageRequestUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutPrescriptionsNestedInput
    orders?: OrderUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    parsedMedicines?: StringFieldUpdateOperationsInput | string
    doctorSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    aiConfidence?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    simplifiedAnalysisAr?: StringFieldUpdateOperationsInput | string
    abnormalValues?: StringFieldUpdateOperationsInput | string
    doctorAdviceQuestions?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedVitamins?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    simplifiedAnalysisAr?: StringFieldUpdateOperationsInput | string
    abnormalValues?: StringFieldUpdateOperationsInput | string
    doctorAdviceQuestions?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedVitamins?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabReportUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    rawOcrText?: NullableStringFieldUpdateOperationsInput | string | null
    simplifiedAnalysisAr?: StringFieldUpdateOperationsInput | string
    abnormalValues?: StringFieldUpdateOperationsInput | string
    doctorAdviceQuestions?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedVitamins?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortageRequestUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutShortageRequestNestedInput
  }

  export type ShortageRequestUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutShortageRequestNestedInput
  }

  export type ShortageRequestUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    quantityNeeded?: IntFieldUpdateOperationsInput | number
    urgency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    foundPharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyInventoryCreateManyMedicineInput = {
    id?: string
    pharmacyId: string
    stockQuantity?: number
    price: number
    isAvailable?: boolean
    expiryDate?: string | null
    updatedAt?: Date | string
  }

  export type PharmacyInventoryUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type PharmacyInventoryUncheckedUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyInventoryUncheckedUpdateManyWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    expiryDate?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyPrescriptionInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    shortageRequestId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    courier?: CourierUpdateOneWithoutOrdersNestedInput
    shortageRequest?: ShortageRequestUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    shortageRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyShortageRequestInput = {
    id?: string
    orderNumber: string
    pharmacyId: string
    customerId?: string | null
    customerName: string
    customerPhone: string
    customerAddress: string
    orderType?: string
    items: string
    subtotal?: number
    deliveryFee?: number
    totalAmount?: number
    paymentMethod?: string
    status?: string
    courierId?: string | null
    prescriptionId?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutShortageRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    courier?: CourierUpdateOneWithoutOrdersNestedInput
    prescription?: PrescriptionUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutShortageRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutShortageRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerAddress?: StringFieldUpdateOperationsInput | string
    orderType?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    subtotal?: FloatFieldUpdateOperationsInput | number
    deliveryFee?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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