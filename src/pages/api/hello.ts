export async function GET() {
  try {
    const DATA = import.meta.env.SITE ?? "NAH";
    const DB = import.meta.env.DB_URL ?? "NO_DB";
    const AN = import.meta.env.ANOTHER ?? "NO_AN";
    return Response.json({
      message: "Hello World",
      data: DATA,
      db: DB,
      an: AN,
      date: new Date(),
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
