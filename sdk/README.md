# Carewell BigCommerce API SDK



*IMPORTANT*: This repository is a fork of the [BigCommerce Docs](https://github.com/bigcommerce/docs) repository which contains the
their OpenAPI YAML specifications. To avoid conflicts when syncing repos, the default branch of this repository has been 
set to `main-sdk`.  All PRs should be made into this branch.

---

## Features

- Tooling to generate types using `openapi-typescript`.
- Automatic generation of package `index.ts` files for flexible consumption as a package.
- Utility script to setup your `.npmrc` file to both consume and publish to the Carewell private npm registry.
---

## Usage

### As a Package:

1. Include this package using `npm` or your package manager of choice. `npm install @carewell/bigcommerce-sdk`
2. Import that thang!

```typescript
// Full package import... eww
import BigCommerceSDK from '@carewell/bigcommerce-sdk'
const response = BigCommerceSDK.Types.OrdersV3.responses.Return_Resp
```

```typescript

import { Types } from '@carewell/bigcommerce-sdk'


const OrdersV3: Types.OrdersV3 = await fetchData<Types.OrdersV3>(url);
```

---

## Coming Soon

- Model generation? :)
