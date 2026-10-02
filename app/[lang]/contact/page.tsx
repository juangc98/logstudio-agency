import { getDict } from "@/lib/i18n";

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { contact } = getDict(lang);
  const label = "mb-2 block text-sm font-bold";
  return (
    <section>
      <div className="px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h1 className="font-display mb-4 text-4xl font-bold md:text-5xl">{contact.title}</h1>
          <p className="text-lg text-corteza">{contact.desc}</p>
        </div>

        {/* TODO(marca): mailto until a real form backend exists */}
        <form
          className="mx-auto max-w-md space-y-4 rounded-md border border-borde bg-crema-alta p-6"
          action="mailto:contacto@logstudio.com.ar"
          method="post"
          encType="text/plain"
        >
          <div>
            <label className={label} htmlFor="name">
              {contact.name}
            </label>
            <input id="name" name="name" className="form-input w-full" type="text" required />
          </div>
          <div>
            <label className={label} htmlFor="email">
              {contact.email}
            </label>
            <input id="email" name="email" className="form-input w-full" type="email" required />
          </div>
          <div>
            <label className={label} htmlFor="store">
              {contact.store}
            </label>
            <input id="store" name="store" className="form-input w-full" type="url" />
          </div>
          <div>
            <label className={label} htmlFor="topic">
              {contact.topic}
            </label>
            <select id="topic" name="topic" className="form-select w-full">
              {contact.topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="message">
              {contact.message}
            </label>
            <textarea id="message" name="message" className="form-textarea w-full" rows={4} required />
          </div>
          <button className="btn btn-agency w-full">{contact.submit}</button>
        </form>
      </div>
    </section>
  );
}
