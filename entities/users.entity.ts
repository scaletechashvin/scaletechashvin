import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
  // tableName: 'objects_mobile_api',
  tableName: 'users',
  timestamps: true,
})
export class Objects extends Model<Objects> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  firstname: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  lastname: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  passwordhash: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  passwordsalt: string;

  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  colorcode: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  platform_id: string;

  @Column({
    type: DataType.TEXT,
  })
  platform: string;

  @Column({
    type: DataType.DATE,
  })
  platform_modification_date: Date;

  @Column({
    type: DataType.DATE,
  })
  startdate: Date;

  @Column({
    type: DataType.TEXT,
  })
  object_title: string;

  @Column({
    type: DataType.TEXT,
  })
  adr_street: string;

  @Column({
    type: DataType.TEXT,
  })
  adr_house_number: string;

  @Column({
    type: DataType.TEXT,
  })
  adr_postal_code: string;

  @Column({
    type: DataType.TEXT,
  })
  adr_city: string;

  @Column({
    type: DataType.TEXT,
  })
  adr_district: string;

  @Column({
    type: DataType.TEXT,
  })
  adr_quarter: string;

  @Column({
    type: DataType.DECIMAL(11, 8),
    allowNull: false,
  })
  adr_coord_lat_epsg4326: number;

  @Column({
    type: DataType.DECIMAL(11, 8),
    allowNull: false,
  })
  adr_coord_lon_epsg4326: number;

  @Column({
    type: DataType.TEXT,
  })
  object_title_picture: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  picture_contains_floorplan: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  contains_object_titlepicture: boolean;

  @Column({
    type: DataType.JSON,
  })
  object_pictures: string[];

  @Column({
    type: DataType.BOOLEAN,
  })
  contains_object_floorplan: boolean;

  @Column({
    type: DataType.TEXT,
  })
  provider_company_name: string;

  @Column({
    type: DataType.DOUBLE,
  })
  price_first: number;

  @Column({
    type: DataType.DOUBLE,
  })
  price_last: number;

  @Column({
    type: DataType.STRING(15),
  })
  price_currency: string;

  @Column({
    type: DataType.STRING(15),
  })
  demand_price_interval: string;

  @Column({
    type: DataType.DOUBLE,
  })
  area_living: number;

  @Column({
    type: DataType.DOUBLE,
  })
  prop_rooms_amount: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  energy_certificate: boolean;

  @Column({
    type: DataType.STRING(15),
  })
  energy_effenciency_class: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  equip_kitchen_fitted: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  equip_balcony: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  equip_garden: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  has_courtage: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  equip_lift_bool: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  equip_bath_guest_toilet: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  prop_basement: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  equip_barrier_free: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @Column({
    type: DataType.BOOLEAN,
  })
  deleted: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  active: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  latest_processed: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  isenable: boolean;
}
