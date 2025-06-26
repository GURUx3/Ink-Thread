import Link from '@tiptap/extension-link';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [isDraft, setIsDraft] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [tagSuggestions, setTagSuggestions] = useState<string[]>([]);
  const [showTagSuggestions, setShowTagSuggestions] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const popularTags = useMemo(() => [
    'Technology', 'Programming', 'Web Development', 'React', 'JavaScript', 'TypeScript',
    'Design', 'UI/UX', 'Frontend', 'Backend', 'DevOps', 'AI', 'Machine Learning',
    'Productivity', 'Career', 'Tutorial', 'Opinion', 'Review', 'News', 'Tips'
  ], []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-accent-600 hover:text-accent-700 underline decoration-accent-300 hover:decoration-accent-500 transition-colors',
        },
      }),
    ],
    content: '<p>Start writing your amazing blog post here...</p>',
    onUpdate: ({ editor }) => {
      const text = editor.getText();
      const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
      setWordCount(words);
      setReadingTime(Math.ceil(words / 200));

      if (text.length > 50) {
        setIsDraft(true);
      }
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none min-h-[400px] px-4 py-3',
      },
    },
  });

  useEffect(() => {
    if (tags.length > 0) {
      const lastTag = tags.split(',').pop()?.trim().toLowerCase() || '';
      if (lastTag.length > 0) {
        const suggestions = popularTags.filter(tag =>
          tag.toLowerCase().includes(lastTag) &&
          !tags.toLowerCase().includes(tag.toLowerCase())
        );
        setTagSuggestions(suggestions.slice(0, 5));
        setShowTagSuggestions(suggestions.length > 0);
      } else {
        setShowTagSuggestions(false);
      }
    } else {
      setShowTagSuggestions(false);
    }
  }, [tags, popularTags]);

  const validateForm = useCallback(() => {
    const errors: string[] = [];

    if (!title.trim()) {
      errors.push('Title is required');
    } else if (title.length < 3) {
      errors.push('Title must be at least 3 characters long');
    }

    if (!editor?.getText().trim() || editor.getText().trim().length < 50) {
      errors.push('Content must be at least 50 characters long');
    }

    if (tags && tags.split(',').length > 10) {
      errors.push('Maximum 10 tags allowed');
    }

    setValidationErrors(errors);
    return errors.length === 0;
  }, [title, editor, tags]);

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsPublishing(true);

    try {
      const html = editor?.getHTML();
      const plainText = editor?.getText();

      await new Promise(resolve => setTimeout(resolve, 2000));

      const blogPost = {
        title: title.trim(),
        content: html,
        plainText,
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
        wordCount,
        readingTime,
        createdAt: new Date().toISOString(),
        isDraft: false,
      };

      console.log('Published blog post:', blogPost);

      setTitle('');
      setTags('');
      editor?.commands.setContent('<p>Start writing your amazing blog post here...</p>');
      setIsDraft(false);
      alert('Blog post published successfully!');
    } catch (error) {
      console.error('Publishing failed:', error);
      alert('Failed to publish. Please try again.');
    } finally {
      setIsPublishing(false);
    }
  };

  const saveDraft = useCallback(async () => {
    if (!title.trim() && !editor?.getText().trim()) return;

    const draftData = {
      title,
      content: editor?.getHTML(),
      tags,
      savedAt: new Date().toISOString(),
    };

    console.log('Draft saved:', draftData);
    setIsDraft(true);
  }, [title, editor, tags]);

  const addLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL', previousUrl);

    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold">Create New Blog Post</h1>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={e => setTags(e.target.value)}
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
      />

      {showTagSuggestions && (
        <div className="bg-white border rounded p-2">
          <p className="text-sm text-gray-500">Suggestions:</p>
          <ul className="flex flex-wrap gap-2 mt-1">
            {tagSuggestions.map((tag, i) => (
              <li
                key={i}
                className="text-sm bg-gray-100 px-2 py-1 rounded cursor-pointer hover:bg-gray-200"
                onClick={() => setTags(prev => prev + (prev.endsWith(',') || prev === '' ? '' : ', ') + tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="border rounded">
        <EditorContent editor={editor} />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Words: {wordCount} | Reading time: {readingTime} min
        </div>
        <button
          onClick={addLink}
          className="text-accent-600 hover:underline text-sm"
        >
          Add Link
        </button>
      </div>

      {validationErrors.length > 0 && (
        <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-2 rounded">
          <ul className="list-disc ml-4 text-sm">
            {validationErrors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          disabled={isPublishing}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isPublishing ? 'Publishing...' : 'Publish'}
        </button>
        <button
          onClick={saveDraft}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          Save Draft
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
