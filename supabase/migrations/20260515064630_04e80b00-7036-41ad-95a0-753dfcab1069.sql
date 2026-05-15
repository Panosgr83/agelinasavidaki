
-- Customers
CREATE TABLE public.customers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id UUID NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  afm TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "owner_select_customers" ON public.customers FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "owner_insert_customers" ON public.customers FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "owner_update_customers" ON public.customers FOR UPDATE USING (auth.uid() = owner_id);
CREATE POLICY "owner_delete_customers" ON public.customers FOR DELETE USING (auth.uid() = owner_id);

-- Offers
CREATE TABLE public.offers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id UUID NOT NULL,
  customer_id UUID REFERENCES public.customers(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  notes TEXT,
  total NUMERIC(10,2) NOT NULL DEFAULT 0,
  lines JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "owner_select_offers" ON public.offers FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "owner_insert_offers" ON public.offers FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "owner_update_offers" ON public.offers FOR UPDATE USING (auth.uid() = owner_id);
CREATE POLICY "owner_delete_offers" ON public.offers FOR DELETE USING (auth.uid() = owner_id);

CREATE INDEX idx_offers_customer ON public.offers(customer_id);
CREATE INDEX idx_offers_owner ON public.offers(owner_id);
CREATE INDEX idx_customers_owner ON public.customers(owner_id);

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql;

CREATE TRIGGER tg_customers_updated BEFORE UPDATE ON public.customers FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER tg_offers_updated BEFORE UPDATE ON public.offers FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
