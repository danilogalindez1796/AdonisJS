PGDMP                          }            Ejemplo1    12.9    12.9                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    43466    Ejemplo1    DATABASE     �   CREATE DATABASE "Ejemplo1" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Colombia.1252' LC_CTYPE = 'Spanish_Colombia.1252';
    DROP DATABASE "Ejemplo1";
                postgres    false            �            1259    43474    Reservas    TABLE     �   CREATE TABLE public."Reservas" (
    "Id" integer NOT NULL,
    "Descripcion" character varying(200),
    fecha date,
    nombre_persona character varying(100)
);
    DROP TABLE public."Reservas";
       public         heap    postgres    false            �            1259    43472    Reservas_Id_seq    SEQUENCE     �   CREATE SEQUENCE public."Reservas_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Reservas_Id_seq";
       public          postgres    false    203                       0    0    Reservas_Id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Reservas_Id_seq" OWNED BY public."Reservas"."Id";
          public          postgres    false    202            
           2604    43477    Reservas Id    DEFAULT     p   ALTER TABLE ONLY public."Reservas" ALTER COLUMN "Id" SET DEFAULT nextval('public."Reservas_Id_seq"'::regclass);
 >   ALTER TABLE public."Reservas" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    202    203    203                      0    43474    Reservas 
   TABLE DATA           P   COPY public."Reservas" ("Id", "Descripcion", fecha, nombre_persona) FROM stdin;
    public          postgres    false    203   �
       	           0    0    Reservas_Id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Reservas_Id_seq"', 1, true);
          public          postgres    false    202            �
           2606    43479    Reservas Reservas_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Reservas"
    ADD CONSTRAINT "Reservas_pkey" PRIMARY KEY ("Id");
 D   ALTER TABLE ONLY public."Reservas" DROP CONSTRAINT "Reservas_pkey";
       public            postgres    false    203               u   x�3�,J-�,���SHIU(J-�/*I�4202�50�52�tI����WpO���KI��2Bѐ�Y\�b$g����#t�`�4FљXZ��TZ��`���R�����YTnB�ːW� $5FH     