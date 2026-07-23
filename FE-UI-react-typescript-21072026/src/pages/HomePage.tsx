import { FileText, Mail, Plus, User } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Button } from "../components/common/Button";
import { FieldInput } from "../components/common/FieldInput";
import { FieldTextarea } from "../components/common/FieldTextarea";
import { Loader } from "../components/common/Loader";
import { FORM_LIMITS } from "../constants/app.constants";
import type { CreatePostPayload } from "../interfaces/post.interface";
import { useCreatePostMutation, usePostsQuery } from "../queries/post.queries";
import { useAppStore } from "../store/app.store";
import { assets } from "../utils/assets";



type PostFormValues = {
  title: string;
  body: string;
};

export function HomePage() {
  const selectedPostId = useAppStore(
    (state) => state.selectedPostId,
  );

  const setSelectedPostId = useAppStore(
    (state) => state.setSelectedPostId,
  );

  const postsQuery = usePostsQuery();
  const createPostMutation = useCreatePostMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormValues>({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const onSubmit = async (values: PostFormValues) => {
    const payload: CreatePostPayload = {
      title: values.title,
      body: values.body,
      userId: 1,
    };

    await createPostMutation.mutateAsync(payload);
    reset();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-10 rounded-3xl bg-d px-6 py-12 text-white sm:px-10"
      >
        <p className="mb-3 text-sm font-semibold tracking-widest text-blue-300 uppercase">
          React starter
        </p>

        <h1 className="max-w-3xl text-3xl font-bold sm:text-5xl">
          React TypeScript application architecture
        </h1>

        <p className="mt-5 max-w-2xl text-white text-2xl bg-brand-dark font-poppins-regular uppercase  shadow-2xl">
          TanStack Query, TanStack Router, Zustand, forms,
          Tailwind CSS and Motion.
        </p>
        
      </motion.section>

<div className="my-2 bg-secondary p-2 rounded-md">
      <a
  href={assets.pdfs.brochure}
  download
  className="text-white font-poppins-semibold hover:underline"
>
  Download brochure
</a>
</div>

<div className="marquee">
  <div className="marquee-track">
    <div className="marquee-content">
      <span>React</span>
      <span>TypeScript</span>
      <span>Tailwind CSS</span>
      <span>TanStack Query</span>
      <span>Zustand</span>
    </div>

    <div className="marquee-content" aria-hidden="true">
      <span>React</span>
      <span>TypeScript</span>
      <span>Tailwind CSS</span>
      <span>TanStack Query</span>
      <span>Zustand</span>
    </div>
  </div>
</div>

      <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Create post
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              This form uses React Hook Form.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FieldInput
              id="title"
              label="Post title"
              placeholder="Enter title"
              leftIcon={<FileText size={18} />}
              maxLength={FORM_LIMITS.title}
              showCharacterCount
              error={errors.title?.message}
              {...register("title", {
                required: "Title is required",
                maxLength: {
                  value: FORM_LIMITS.title,
                  message: `Maximum ${FORM_LIMITS.title} characters allowed`,
                },
              })}
            />

            <FieldTextarea
              id="body"
              label="Post description"
              placeholder="Enter post description"
              leftIcon={<Mail size={18} />}
              maxLength={FORM_LIMITS.body}
              showCharacterCount
              error={errors.body?.message}
              {...register("body", {
                required: "Description is required",
                maxLength: {
                  value: FORM_LIMITS.body,
                  message: `Maximum ${FORM_LIMITS.body} characters allowed`,
                },
              })}
            />

            <Button
              type="submit"
              fullWidth
              leftIcon={<Plus size={18} />}
              isLoading={createPostMutation.isPending}
            >
              Create post
            </Button>

            {createPostMutation.isError && (
              <p className="text-sm text-red-600">
                {createPostMutation.error.message}
              </p>
            )}
          </form>
        </motion.section>

        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Latest posts
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Data loaded using TanStack Query.
              </p>
            </div>

            {selectedPostId && (
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                Selected: {selectedPostId}
              </span>
            )}
          </div>

          {postsQuery.isPending && (
            <div className="rounded-2xl bg-white p-12">
              <Loader label="Loading posts..." />
            </div>
          )}

          {postsQuery.isError && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <p className="font-medium text-red-700">
                Could not load posts
              </p>

              <p className="mt-1 text-sm text-red-600">
                {postsQuery.error.message}
              </p>

              <Button
                variant="danger"
                size="sm"
                className="mt-4"
                onClick={() => postsQuery.refetch()}
              >
                Try again
              </Button>
            </div>
          )}

          {postsQuery.data && (
            <div className="grid gap-4 sm:grid-cols-2">
              {postsQuery.data.slice(0, 10).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: Math.min(index * 0.04, 0.4),
                  }}
                  onClick={() => setSelectedPostId(post.id)}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <User size={19} />
                  </div>

                  <h3 className="line-clamp-2 font-bold capitalize text-slate-900">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {post.body}
                  </p>

                  <p className="mt-5 text-xs font-semibold text-blue-600">
                    Post #{post.id}
                  </p>
                </motion.article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}